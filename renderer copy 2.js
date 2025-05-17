const { remote } = require("electron");
const { PosPrinter } = remote.require("electron-pos-printer");
const path = require("path");

let webContents = remote.getCurrentWebContents();

function getPrinters() {
    return webContents.getPrinters().map(p => p.name);
}

// Initialize Pusher (from included pusher.min.js)
const pusher = new Pusher('05c48d936b9e850589f7', { cluster: 'ap1' });
const channel = pusher.subscribe('my-channel');

// Listen to Pusher Event
channel.bind('my-event', async ({ data }) => {
    const value = data.payload;
    const productsByPrinter = value.products_by_printer || {};

    if (Object.keys(productsByPrinter).length === 0) {
        console.warn('⚠️ No product data received.');
        return;
    }

    console.log("📦 Received products by printer:", productsByPrinter);

    for (const [printerName, products] of Object.entries(productsByPrinter)) {
        const productList = products.map(product => [
            product.product_name,   
            product.quantity,     
            product.extra_options || '',  
            product.level_name || '',    
            product.choice_names || ''   
        ]);
    
        await printReceipt(printerName, value, productList);
    }

    console.log("✅ All print jobs processed.");
});


// Generate print data & trigger print
async function printReceipt(printerName, order, productList) {
    console.log(`🖨️ Preparing to print on: ${printerName}`);

    if (productList.length === 0) {
        console.warn(`⚠️ No products for printer "${printerName}". Skipping.`);
        return;
    }

    const numberedProductList = productList.map((item, index) => [ 
        (index + 1).toString(),
        ...item 
    ]);

    const printData = [
        { type: "text", value: `${order.business_name}`, style: "text-align:center;", css: { "font-weight": "700", "font-size": "14px" } },
        { type: "text", value: `Table: ${order.tableName}`, style: "text-align:center;", css: { "font-size": "12px" } },
        { type: "text", value: `Order From: ${order.order_from}`, style: "text-align:center;", css: { "font-size": "12px" } },
        { type: "text", value: `Invoice: ${order.transaction_invoice}`, style: "text-align:center;", css: { "font-size": "12px" } },
        { type: "text", value: `Order Time: ${order.transaction_created}`, style: "text-align:center;", css: { "font-size": "12px" } },
        { type: "text", value: `Notes: ${order.transaction_additional_notes}`, style: "text-align:center;", css: { "font-size": "12px", "margin-bottom": "5px" } },
        {
            type: "table",
            tableHeader: ["No", "Product", "Qty", "Extra Option", "Level", "Choice"],
            tableBody: numberedProductList,
            tableHeaderStyle: {
                "border": "1px solid black",
                "background-color": "#343a40",  
                "color": "white",               
                "padding": "4px",
                "text-align": "center",
                "font-weight": "bold"
            },
            tableBodyStyle: {
                "border": "1px solid black",
                "padding": "4px",
                "text-align": "center"
            },
            css: {
                "font-size": "10px"
            }
        },
        
        { type: "text", value: "Printed at: " + new Date().toLocaleString(), style: "text-align:center;", css: { "font-size": "10px", "margin": "5px 0" } }
    ];

    await print(printerName, printData);
}



function print(printerName, data) {
    const availablePrinters = getPrinters();
    if (!availablePrinters.includes(printerName)) {
        console.error(`❌ Printer "${printerName}" not found.`);
        alert(`Printer "${printerName}" not found.`);
        return Promise.resolve();
    }

    const options = {
        preview: false,
        width: "80mm",
        margin: "0 0 0 0",
        copies: 1,
        printerName: printerName,
        timeOutPerLine: 10000,
        silent: true
    };

    console.log(`🖨️ Sending print job to ${printerName}`);

    return PosPrinter.print(data, options)
        .then(() => console.log(`✅ Print job successfully sent to ${printerName}`))
        .catch((error) => console.error(`❌ Print error on ${printerName}:`, error));
}
