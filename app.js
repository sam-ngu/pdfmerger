const fs = require('fs');
const path = require('path');
const PDFMerger = require("pdf-merger-js");

const merger = new PDFMerger();

const files = fs.readdirSync("inputs").filter((file) => file !== '.DS_Store');

function merge() {
    for (let index = 0; index < files.length; index++) {
        
        const file = path.join( __dirname, 'inputs', files[index]);

        console.log(file);
        merger.add(file); 
    }

    merger.save("merged.pdf");
}
merge();
