let { remote } = require("electron");
// console.log(process.versions.electron);

const { PosPrinter } = remote.require("electron-pos-printer");
// const {PosPrinter} = require("electron-pos-printer"); //dont work in production (??)

const path = require("path");

let webContents = remote.getCurrentWebContents();
let printers = webContents.getPrinters(); //list the printers
console.log(printers);

// printers.map((item, index) => {
//   //write in the screen the printers for choose
//   document.getElementById("list_printers").innerHTML +=
//     // ' <input type="radio" id="printer_' +
//     // index +
//     // '" name="printer" value="' +
//     // item.name +
//     // '"><label for="printer_' +
//     // index +
//     // '">' +
//     // item.name +
//     // "</label><br>";
//     '<li>' + item.name + '</li>'
// });

function date() {
    const x = new Date();

    const y = "0" + x.getHours();
    const z = "0" + x.getMinutes();
    const s = "0" + x.getSeconds();
    const h = "0" + x.getDate();
    const ano = x.getFullYear().toString().substr(-2);
    const ms = x.getMonth();
    const meses = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    return (
        y.substr(-2) +
        ":" +
        z.substr(-2) +
        ":" +
        s.substr(-2) +
        " -  " +
        h.substr(-2) +
        "/" +
        meses[ms]
    );
}
// ======read info from realtime======

const socketListener = async() => {
    const options = {
        secure: true,
        authType: 'ws',
    };
    const client = new SocketClient('3vENntM3qglor-mxug8fqUMQ622WVvUj2QyG8hRAXHLu6_9M', options);
    const instance = await client.connect();

    // const channel = instance.subscribe('new_order_print_biz_id_2');
    const channel = instance.subscribe('new_order_print_local_biz_id_6');
    const iterator = channel[Symbol.asyncIterator]();
    const result = [];
    while (result.length < Infinity) {
        const { value, done } = await iterator.next();
        if (done) break;

        console.log(value);
        // console.log(value.transaction_created);
        // console.log(value.transaction_additional_notes);

        // console.log(value.product);
        var additional_notes = value.transaction_additional_notes;
        var invoice_no = value.transaction_invoice;
        var created_at = value.transaction_created;
        var order_from = value.order_from;


        if (value.tableName != 'Null') {
            var table_number = value.tableName;
        } else {
            var table_number = "__";
        }

        var product = value.product;
       
       
        if (product) {
            // console.log(product);
            product = Object.values(product);

            output = [product.reduce((a, c) => (a[c.printer_name] = (a[c.printer_name] || []).concat(c), a), {})];
            var dataProduct = output[0];

            var orderInfo = '<br/>' +
                '<p>Table #: ' +
                table_number +
                ' , ' +
                'Invoice #:' +
                invoice_no +
                ',Created Date: ' +
                created_at +
                ',Order From: ' +
                order_from +
                '</p>' +
                '<p>Note: ' +
                additional_notes +
                ' </p>';
            for (i in dataProduct) {
                //dataProduct[i] is your current object inside the array, {"DisplayName":"Answer Number 1","Value":"Answer1","Option":"True"}
                // prepare item list
                var items = "";
                var num = 0;
                var sell_line_note = "";
                var option_name = "";
                for (key in dataProduct[i]) {
                    num = num + 1;

                    if (dataProduct[i][key]['sell_line_note']) {
                        var sell_line_note = dataProduct[i][key]['sell_line_note'];
                    }

                    // keys are DisplayName,  Value, Option
                    // console.log(i);
                    // console.log(dataProduct[i][key]); // instead of writing object.key you can also write object[key]
                    var printerName = i;
                    // var printer = dataProduct[i][key]['printer_name'];
                    // console.log(printer + 1);
                  
                    items = items + '<tr style="border: 1px solid black;border-collapse: collapse;">' +
                        '<td style="border: 1px solid black;border-collapse: collapse;">' +
                        num +
                        '</td>' +
                        '<td style="border: 1px solid black;border-collapse: collapse;">' +
                        dataProduct[i][key]['product_name'] +
                        '<br/><i>' +

                        sell_line_note +
                        '</i>' +
                        '</td>' +
                        '<td style="border: 1px solid black;border-collapse: collapse;">' +
                        dataProduct[i][key]['quantity'] +
                        '</td>' +
                        '</tr>'
                

                }
                var itemList = '<table>' +
                    '<tr style="border: 1px solid black;border-collapse: collapse;">' +
                    '<th style="border: 1px solid black;border-collapse: collapse;">' +
                    'No' +
                    '</th>' +
                    '<th style="border: 1px solid black;border-collapse: collapse;">' +
                    'Product' +
                    '</th>' +
                    '<th style="border: 1px solid black;border-collapse: collapse;">' +
                    'QTY' +
                    '</th>' +
                    '</tr>' +
                    items +
                    '</table>';
                //print
                var data = [{
                        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                        value: "ORDER LIST",
                        style: `text-align:center;`,
                        css: { "font-weight": "700", "font-size": "18px" },
                    },
                    {
                        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                        value: orderInfo,
                        style: `text-align:center;`,
                        css: {
                            "font-size": "14px",
                            "font-family": "sans-serif",
                            "text-align": "center",
                        },
                    },
                    // {
                    //   type: "image",
                    //   path: path.join(__dirname, "assets/logo.png"), // file path
                    //   position: "center", // position of image: 'left' | 'center' | 'right'
                    //   width: "auto", // width of image in px; default: auto
                    //   height: "60px", // width of image in px; default: 50 or '50px'
                    // },
                    {
                        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
                        value: itemList,

                        css: {
                            "font-size": "14px",
                            "font-family": "sans-serif",
                            "text-align": "center",
                        },
                    }
                ];
                if(printerName){
                    print(printerName, data);
                }

            }

        } else {
            console.log('No Product to print!!');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    socketListener();
});


function print(printerName, data) {
    // let printerName = 'HP_LaserJet_Professional_P1102';
    let widthPage = '100 %';

    var p = document.getElementsByName("printer");
    var w = document.getElementsByName("width");

    for (var i = 0, length = p.length; i < length; i++) {
      if (p[i].checked) {
        printerName = p[i].value;

        break
      }
    }

    for (var i = 0, length = w.length; i < length; i++) {
      if (w[i].checked) {
        widthPage = w[i].value;

        break;
      }
    }

    // console.log(printerName, widthPage);

    const options = {
        preview: false, // Preview in window or print
        width: widthPage, //  width of content body
        margin: "0 0 0 0", // margin of content body
        copies: 1, // Number of copies to print
        printerName: printerName, // printerName: string, check it at webContent.getPrinters()
        timeOutPerLine: 400,
        silent: true,
    };

    const now = {
        type: "text",
        value: "Print at:" + date(),
        style: `text-align:center;`,
        css: { "font-size": "12px", "font-family": "sans-serif" },
    };

    const d = [...data, now];

    if (printerName && widthPage) {
        PosPrinter.print(d, options)
            .then(() => {})
            .catch((error) => {
                // console.error(error);
            });
    } else {
        // alert("Select the printer and the width");
        console.error(error);
    }
}