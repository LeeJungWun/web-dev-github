const fs = require('fs');

function readFile() {
    let fileData;
    try {
        fileData = fs.readFileSync('data.json');
    } catch {
        console.log('error');
    }
    console.log(fileData);
    console.log('hi');
}

readFile();