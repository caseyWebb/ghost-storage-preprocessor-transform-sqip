# Ghost Storage Preprocessor SQIP Transform

> Creates a [SQIP][] for every uploaded file and appends `.sqip.svg`

Used with [ghost-storage-preprocessor][].

## Prerequisites
- Golang (https://golang.org/doc/install)
- Primitive (https://github.com/fogleman/primitive)

## Installation
```bash
$ npm install ghost-storage-preprocessor-sqip
$ mkdir -p ./content/adapters/storage/preprocessor/transforms
$ cp -r ./node_modules/ghost-storage-preprocessor-transform-sqip ./content/adapters/storage/preprocessor/transforms/sqip
```

## Usage
```json
{
  "storage": {
    "active": "preprocessor",
    "preprocessor": {
      "transforms": [
        ["sqip", {}]
      ]
    }
  }
}
```

[SQIP]: https://github.com/technopagan/sqip
[ghost-storage-preprocessor]: https://github.com/caseyWebb/ghost-storage-preprocessor