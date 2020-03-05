# FLAT FILE PARSER (FFD)

FFD parser which parses the provided flat file with the provided JSON schema and return the data in JSON object.

### Things to know:
- Project is work in progress
- Parser works based on each line for simple and complex data types
- If any issues or feature request, feel free to raise it as issue.


## Installation:

```bash
    $   yarn add ffd-parser
    $   npm i -s ffd-parser
```

## Usage:

### Define Schema:
FFD parser compiles your data into two categories.
- Basic:

**NOTE: position starts from 1 not 0**

```json
    {
        "keyName": {
            "length": 10,
            "position": 1,
            "type": "String | Number"
        }
    }
```
- Complex
```json
    {
        "keyName": {
            "test": "RegExp()",
            "schema": "Basic | Complex Schema Name"
        }
    }
```

### Implementation:

```javascript
    const readFFD = require('ffd-parser');

    const filePath = "path to your file";
    const schema = {
        company: {
            length: 14,
            position: 1,
            type: 'string'
        }
    }

    const writeToFile = true;
    const outputFileName = ""; // If not provided, outputs temp.json file

    readFFD(filePath, schema, writeToFile, outputFileName).then(console.log).catch(console.error);

```

## Examples:

Sample FFD parser examples are also provided in [examples](./examples/) folder.

