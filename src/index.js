const fs = require('fs');
const path = require('path');

const parseLine = (line, schema) => {
    const obj = {};
    for(let col in schema){
        const schemaObj = schema[col];
        if( schemaObj.test && new RegExp(schemaObj.test).test(line) ){
            obj[col] = parseLine(line, schemaObj.schema);
        } else if( schemaObj.test === undefined ){
            const parsed = line.substr( schemaObj.position - 1, schemaObj.length);
            const data = String(schema.type).toLowerCase() === 'number' ? Number(parsed) : parsed.trim()
            obj[col] = data; 
        }
    }
    return obj;
}

const readFFD = (file, schema, writeToFile=false, docName="temp.json") => new Promise( (resolve, reject) => {
    const filePath = path.resolve(__dirname, file);
    fs.readFile(filePath, "utf8", (err, data) => {
        const arr = [];
        if(err) reject(err);
        const lines = data.split('\n');
        lines.forEach(line => arr.push(parseLine(line, schema)) );
        !writeToFile 
            ? resolve(arr)
            : fs.writeFile(docName, JSON.stringify(arr), (err) => {
                if(err) reject(err);
                resolve(arr)
            })
            
    });
});

module.exports = readFFD;