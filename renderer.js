// const { remote } = require("electron");
// const { PosPrinter } = remote.require("electron-pos-printer");
// const path = require("path");

// let webContents = remote.getCurrentWebContents();

// const errorContainer = document.querySelector('.show-error');

// /**
//  * Display an error message in the UI
//  * @param {string} errorMessage
//  * @param {string} printerName
//  * @param {string} productName
//  * @param {string} invoiceId
//  */
// function displayError(errorMessage, printerName, productName, invoiceId) {

//     // Create error card
//     const card = document.createElement('div');
//    card.className = 'col-md-4';

//     const errorCard = document.createElement('div');
//     errorCard.className = 'error-card px-0';

//     const errorHeader = document.createElement('div');
//     errorHeader.className = 'card-header error-header';
//     errorHeader.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//             <circle cx="12" cy="12" r="10"></circle>
//             <line x1="12" y1="8" x2="12" y2="12"></line>
//             <line x1="12" y1="16" x2="12.01" y2="16"></line>
//         </svg>
//         <span>Printer Error</span>
//         <span class="error-id ms-auto">Invoice ID: #${invoiceId || 'N/A'}</span>
//     `;

//     // Create error content
//     const errorContent = document.createElement('div');
//     errorContent.className = 'card-body error-content';

//     const productInfo = productName ? `<strong>Product:</strong> ${productName}<br>` : '<strong>Product:</strong> N/A<br>';
//     const printerInfo = printerName ? `<strong>Printer:</strong> ${printerName}<br>` : '<strong>Printer:</strong> N/A<br>';

//     errorContent.innerHTML = `
//         ${productInfo}
//         ${printerInfo}
//         <strong>Error:</strong> ${errorMessage}
//         <div class="error-timestamp">
//             <small>${new Date().toLocaleString()}</small>
//         </div>
//     `;

//     const cardfooter = document.createElement('div'); 
//     cardfooter.className = 'card-footer';

//     const dismissBtn = document.createElement('button');
//     dismissBtn.className = 'error-dismiss btn btn-outline-danger btn-sm mt-2';
//     dismissBtn.textContent = 'Dismiss';
//     dismissBtn.onclick = () => {
//         errorCard.classList.add('fade-out');
//         setTimeout(() => {
//             errorCard.remove();
//         }, 300); 
//     };

//     cardfooter.appendChild(dismissBtn);

//     errorCard.appendChild(errorHeader);
//     errorCard.appendChild(errorContent);

//     errorCard.appendChild(cardfooter);
//     card.appendChild(errorCard);
//     errorContainer.appendChild(card);

//     // errorContainer.appendChild(errorCard);

//     setTimeout(() => {
//         errorCard.classList.add('show');
//     }, 10);

//     // Add a "clear all" button if this is the first error
//     if (errorContainer.childElementCount === 1) {
//         const clearAllContainer = document.createElement('div');
//         clearAllContainer.className = 'clear-all-container mt-2 mb-2';

//         const clearAllBtn = document.createElement('button');
//         clearAllBtn.className = 'clear-all-btn btn btn-secondary btn-sm';
//         clearAllBtn.textContent = 'Clear All Errors';
//         clearAllBtn.onclick = () => {
//             errorContainer.innerHTML = '';
//         };

//         clearAllContainer.appendChild(clearAllBtn);
//         errorContainer.insertBefore(clearAllContainer, errorContainer.firstChild);
//     }
// }


// function injectErrorStyles() {
//     const styleElement = document.createElement('style');
//     styleElement.textContent = `
//         .error-card {
//             background-color: #fff;
//             border-left: 4px solid #dc3545;
//             border-radius: 4px;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//             margin-bottom: 16px;
//             opacity: 0;
//             transform: translateX(20px);
//             transition: opacity 0.3s, transform 0.3s;
//             overflow: hidden;
//         }

//         .error-card.show {
//             opacity: 1;
//             transform: translateX(0);
//         }

//         .error-card.fade-out {
//             opacity: 0;
//             transform: translateX(20px);
//         }

//         .error-header {
//             background-color: #fff5f5;
//             color: #dc3545;
//             // padding: 12px 16px;
//             font-weight: bold;
//             display: flex;
//             align-items: center;
//             border-bottom: 1px solid #ffe0e0;
//         }

//         .error-header svg {
//             margin-right: 8px;
//         }

//         .error-id {
//             margin-left: auto;
//             font-size: 12px;
//             opacity: 0.8;
//         }

//         .error-content {
//             padding: 16px;
//             color: #333;
//             line-height: 1.5;
//         }

//         .error-timestamp {
//             margin-top: 8px;
//             color: #666;
//         }

//         .error-dismiss {
//             display: block;
//             width: 100%;
//             padding: 8px;
//             background-color: #f8f9fa;
//             border: none;
//             border-top: 1px solid #eee;
//             color: #6c757d;
//             font-weight: 500;
//             cursor: pointer;
//             transition: background-color 0.2s;
//         }

//         .error-dismiss:hover {
//             background-color: #e9ecef;
//         }

//         .clear-all-container {
//             text-align: right;
//             margin-bottom: 10px;
//         }

//         .clear-all-btn {
//             background-color: #6c757d;
//             color: white;
//             border: none;
//             border-radius: 4px;
//             padding: 8px 12px;
//             font-size: 14px;
//             cursor: pointer;
//             transition: background-color 0.2s;
//         }

//         .clear-all-btn:hover {
//             background-color: #5a6268;
//         }
//     `;
    
//     document.head.appendChild(styleElement);
// }

// injectErrorStyles();

// function getPrinters() {
//     return webContents.getPrinters().map(p => p.name);
// }

// const pusher = new Pusher('05c48d936b9e850589f7', { cluster: 'ap1' });
// const channel = pusher.subscribe('my-channel');

// channel.bind('my-event', async ({ data }) => {
//     const value = data.payload;
//     const productsByPrinter = value.products_by_printer || {};

//     if (Object.keys(productsByPrinter).length === 0) {
//         console.warn('⚠️ No product data received.');
//         displayError('No product data received for printing.', null);
//         return;
//     }

//     console.log("📦 Received products by printer:", productsByPrinter);

//     for (const [printerName, products] of Object.entries(productsByPrinter)) {
//         const productList = products.map(product => [
//             product.product_name,   
//             product.quantity,     
//             product.extra_options || '',  
//             product.level_name || '',    
//             product.choice_names || ''   
//         ]);

//         await printReceipt(printerName, value, productList,products);
        
//     }

//     console.log("✅ All print jobs processed.");
// });


// // Generate print data & trigger print
// async function printReceipt(printerName, order, productList, products) {
//     console.log(`🖨️ Preparing to print on: ${printerName}`);

//     if (productList.length === 0) {
//         const errorMsg = `No products for printer "${printerName}". Skipping.`;
//         console.warn(`⚠️ ${errorMsg}`);
//         displayError(errorMsg, printerName, "Unknown Product", "Unknown Invoice");
//         return;
//     }
//     const productForPrinter = products.find(p => p.printer_name === printerName);
//     const productName = productForPrinter ? productForPrinter.product_name : "N/A";
//     const invoiceId = order.transaction_invoice || 'Unknown Invoice';


//     const numberedProductList = productList.map((item, index) => [ 
//         (index + 1).toString(),
//         ...item 
//     ]);

//     const printData = [
//         { type: "text", value: `${order.business_name}`, style: "text-align:center;", css: { "font-weight": "700", "font-size": "14px" } },
//         { type: "text", value: `Table: ${order.tableName}`, style: "text-align:center;", css: { "font-size": "12px" } },
//         { type: "text", value: `Order From: ${order.order_from}`, style: "text-align:center;", css: { "font-size": "12px" } },
//         { type: "text", value: `Invoice: ${order.transaction_invoice}`, style: "text-align:center;", css: { "font-size": "12px" } },
//         { type: "text", value: `Order Time: ${order.transaction_created}`, style: "text-align:center;", css: { "font-size": "12px" } },
//         { type: "text", value: `Notes: ${order.transaction_additional_notes}`, style: "text-align:center;", css: { "font-size": "12px", "margin-bottom": "5px" } },
//         {
//             type: "table",
//             tableHeader: ["No", "Product", "Qty", "Extra Option", "Level", "Choice"],
//             tableBody: numberedProductList,
//             tableHeaderStyle: {
//                 "border": "1px solid black",
//                 "background-color": "#343a40",  
//                 "color": "white",               

//                 "padding": "4px",
//                 "text-align": "center",
//                 "font-weight": "bold"
//             },
//             tableBodyStyle: {
//                 "border": "1px solid black",
//                 "padding": "4px",
//                 "text-align": "center"
//             },
//             css: {
//                 "font-size": "10px"
//             }
//         },
        
//         { type: "text", value: "Printed at: " + new Date().toLocaleString(), style: "text-align:center;", css: { "font-size": "10px", "margin": "5px 0" } }
//     ];

//     await print(printerName, printData, productName, invoiceId);
//     // const errorMsg = `Failed to print on ${printerName}`;
//     // displayError(errorMsg, printerName, productName, invoiceId);
// }


// function print(printerName, data, productName, invoiceId) {
//     const availablePrinters = getPrinters();
//     if (!availablePrinters.includes(printerName)) {
//         const errorMsg = `Printer "${printerName}" not found.`;
//         console.error(`❌ ${errorMsg}`);
//         displayError(errorMsg, printerName, productName, invoiceId);
//         return Promise.resolve();
//     }

//     const options = {
//         preview: false,
//         width: "80mm",
//         margin: "0 0 0 0",
//         copies: 1,
//         printerName: printerName,
//         timeOutPerLine: 10000,
//         silent: true
//     };

//     console.log(`🖨️ Sending print job to ${printerName}`);

//     return PosPrinter.print(data, options,productName, invoiceId)
//         .then(() => console.log(`✅ Print job successfully sent to ${printerName}`))
//         .catch((error) => {
//             const errorMsg = error.toString();
//             console.error(`❌ Print error on ${printerName}:`, errorMsg);
//             displayError(errorMsg, printerName, productName, invoiceId);
//         });
// }
const { remote } = require("electron");
const { PosPrinter } = remote.require("electron-pos-printer");
const path = require("path");

let webContents = remote.getCurrentWebContents();
const errorContainer = document.querySelector('.show-error');

// 🌐 Get detailed printer status
function getPrinterStatus(printerName) {
    const printers = webContents.getPrinters();
    const printer = printers.find(p => p.name === printerName);

    if (!printer) return { found: false, status: 'Not Found', code: null };

    const code = printer.status;
    let statusMsg = 'Unknown issue';

    switch (code) {
        case 3: statusMsg = 'Ready'; break;
        case 0: statusMsg = 'Offline or disconnected'; break;
        case 2: statusMsg = 'Error (Possible causes: power off, paper jam, or open cover)'; break;
        case 4: statusMsg = 'Currently printing'; break;
        case 1: statusMsg = 'Paused or waiting'; break;
        default: statusMsg = `Unknown status (code ${code})`; break;
    }

    return { found: true, status: statusMsg, code };
}


function displayError(errorMessage, printerName, productName, invoiceId) {
    const errorAudio = document.getElementById('printer-error-sound');

    if (errorAudio) {
        let playCount = 0;

        const playAgain = () => {
            playCount++;
            if (playCount < 2) {
                errorAudio.currentTime = 0;
                errorAudio.play().catch(e => console.warn("Sound play failed:", e));
            } else {
                errorAudio.removeEventListener('ended', playAgain);
            }
        };

        errorAudio.currentTime = 0;
        errorAudio.play().catch(e => console.warn("Sound play failed:", e));
        errorAudio.addEventListener('ended', playAgain);
    }

    const card = document.createElement('div');
    card.className = 'col-md-4';

    const errorCard = document.createElement('div');
    errorCard.className = 'error-card px-0';

    const errorHeader = document.createElement('div');
    errorHeader.className = 'card-header error-header';
    errorHeader.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Printer Error</span>
        <span class="error-id ms-auto">Invoice ID: #${invoiceId || 'N/A'}</span>
    `;

    const errorContent = document.createElement('div');
    errorContent.className = 'card-body error-content';
    const productInfo = productName ? `<strong>Product:</strong> ${productName}<br>` : '<strong>Product:</strong> N/A<br>';
    const printerInfo = printerName ? `<strong>Printer:</strong> ${printerName}<br>` : '<strong>Printer:</strong> N/A<br>';

    errorContent.innerHTML = `
        ${productInfo}
        ${printerInfo}
        <strong>Error:</strong> ${errorMessage}
        <div class="error-timestamp"><small>${new Date().toLocaleString()}</small></div>
    `;

    const cardfooter = document.createElement('div'); 
    cardfooter.className = 'card-footer';

    const dismissBtn = document.createElement('button');
    dismissBtn.className = 'error-dismiss btn btn-outline-danger btn-sm mt-2';
    dismissBtn.textContent = 'Dismiss';
    dismissBtn.onclick = () => {
        errorCard.classList.add('fade-out');
        setTimeout(() => errorCard.remove(), 300);
        console.clear();
    };

    cardfooter.appendChild(dismissBtn);
    errorCard.appendChild(errorHeader);
    errorCard.appendChild(errorContent);
    errorCard.appendChild(cardfooter);
    card.appendChild(errorCard);
    errorContainer.appendChild(card);

    setTimeout(() => errorCard.classList.add('show'), 10);

    if (errorContainer.childElementCount === 1) {
        const clearAllContainer = document.createElement('div');
        clearAllContainer.className = 'clear-all-container mt-2 mb-2';

        const clearAllBtn = document.createElement('button');
        clearAllBtn.className = 'clear-all-btn btn btn-secondary btn-sm';
        clearAllBtn.textContent = 'Clear All Errors';
        clearAllBtn.onclick = () => {
            errorContainer.innerHTML = '';
            console.clear();
        };

        clearAllContainer.appendChild(clearAllBtn);
        errorContainer.insertBefore(clearAllContainer, errorContainer.firstChild);
    }
    
}

function injectErrorStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .error-card {
            background-color: #fff;
            border-left: 4px solid #dc3545;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            margin-bottom: 16px;
            opacity: 0;
            transform: translateX(20px);
            transition: opacity 0.3s, transform 0.3s;
            overflow: hidden;
        }
        .error-card.show {
            opacity: 1;
            transform: translateX(0);
        }
        .error-card.fade-out {
            opacity: 0;
            transform: translateX(20px);
        }
        .error-header {
            background-color: #fff5f5;
            color: #dc3545;
            font-weight: bold;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ffe0e0;
        }
        .error-header svg {
            margin-right: 8px;
        }
        .error-id {
            margin-left: auto;
            font-size: 12px;
            opacity: 0.8;
        }
        .error-content {
            padding: 16px;
            color: #333;
            line-height: 1.5;
        }
        .error-timestamp {
            margin-top: 8px;
            color: #666;
        }
        .error-dismiss {
            width: 100%;
            padding: 8px;
            border: none;
            border-top: 1px solid #eee;
            color: #6c757d;
            cursor: pointer;
        }
        .error-dismiss:hover {
            background-color: #e9ecef;
        }
        .clear-all-container {
            text-align: right;
            margin-bottom: 10px;
        }
        .clear-all-btn {
            background-color: #6c757d;
            color: white;
            border-radius: 4px;
            padding: 8px 12px;
        }
        .clear-all-btn:hover {
            background-color: #5a6268;
        }
    `;
    document.head.appendChild(styleElement);
}

injectErrorStyles();

const pusher = new Pusher('05c48d936b9e850589f7', { cluster: 'ap1' });
const channel = pusher.subscribe('my-channel');

channel.bind('my-event', async ({ data }) => {
    const value = data.payload;
    const productsByPrinter = value.products_by_printer || {};

    if (Object.keys(productsByPrinter).length === 0) {
        // console.warn('⚠️ No product data received.');
        displayError('No product data received for printing.', null);
        return;
    }

    // console.log("📦 Received products by printer:", productsByPrinter);

    for (const [printerName, products] of Object.entries(productsByPrinter)) {
        const productList = products.map(product => [
            product.product_name,   
            product.quantity,     
            product.extra_options || '',  
            product.level_name || '',    
            product.choice_names || ''   
        ]);
        await printReceipt(printerName, value, productList, products);
    }

    // console.log("✅ All print jobs processed.");
});

async function printReceipt(printerName, order, productList, products) {

    if (productList.length === 0) {
        const errorMsg = `No products for printer "${printerName}". Skipping.`;
        console.warn(`⚠️ ${errorMsg}`);
        displayError(errorMsg, printerName, "Unknown Product", "Unknown Invoice");
        return;
    }

    const productForPrinter = products.find(p => p.printer_name === printerName);
    const productName = productForPrinter ? productForPrinter.product_name : "N/A";
    const invoiceId = order.transaction_invoice || 'Unknown Invoice';

    const numberedProductList = productList.map((item, index) => [(index + 1).toString(), ...item]);

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
            css: { "font-size": "10px" }
        },
        { type: "text", value: "Printed at: " + new Date().toLocaleString(), style: "text-align:center;", css: { "font-size": "10px", "margin": "5px 0" } }
    ];

    await print(printerName, printData, productName, invoiceId);
}

function print(printerName, data, productName, invoiceId) {
   const { found, status, code } = getPrinterStatus(printerName);

    if (!found) {
        const errorMsg = `Printer "${printerName}" not found.`;
        displayError(errorMsg, printerName, productName, invoiceId);
        return Promise.resolve();
    }

    if (code === 2) {
        const errorMsg = `Printer "${printerName}" is not ready. ${status}`;
        displayError(errorMsg, printerName, productName, invoiceId);
        return Promise.resolve();
    }

    if (![3, 0].includes(code)) {
        const errorMsg = `Printer "${printerName}" is not ready. ${status}`;
        displayError(errorMsg, printerName, productName, invoiceId);
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

    return PosPrinter.print(data, options, productName, invoiceId)
         .then(() => {
            console.log(`✅ Print job successfully sent to ${printerName}`);
            console.clear();
        })
        .catch((error) => {
            const errorMsg = error.toString();
            console.error(`❌ Print error on ${printerName}:`, errorMsg);
            displayError(errorMsg, printerName, productName, invoiceId);
        });
}
