const csvjson   = require('csvjson');
const readFile  = require('fs').readFile;

readFile('data.csv', 'utf-8', (err, fileContent) => {
    if (err) {
        console.log(err);
        throw new Error(err);
    }
    const jsonObj = csvjson.toObject(fileContent);
    console.log(jsonObj);
})
