const readFFD = require('../src');
const path = require('path');

const schema = {
    "employeeID": {
        "type": "Number",
        "length": 5,
        "position": 1
    },
    "name": {
        "type": "String",
        "length": 20,
        "position": 6
    },
    "position": {
        "type": "String",
        "length": 2,
        "position": 26
    }
}

const filePath = path.resolve(__dirname, process.argv[2]);
readFFD(filePath, schema, true)
    .then(console.log)
    .catch(console.error);