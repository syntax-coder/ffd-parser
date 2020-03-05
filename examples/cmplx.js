const readFFD = require('../src');
const path = require('path');

const labelSchema = {
    label: {
        length: 6,
        position: 7,
        type: 'number'
    }
}

const addressSchema = {
    zip: {
        length: 5,
        position: 1,
        type: 'number'
    },
    state: {
        length: 2,
        position: 6,
        type: 'string'
    },
    address: {
        length: 20,
        position: 8,
        type: "string"
    },
    company: {
        length: 14,
        position: 28,
        type: 'string'
    }
}

const schema = {
    header: {
        test: "^.{12}$",
        schema: labelSchema
    },
    data: {
        test: "^.{30,}$",
        schema: addressSchema
    }
}

const filePath = path.resolve(__dirname, process.argv[2]);
readFFD(filePath, schema, true)
    .then(console.log)
    .catch(console.error);