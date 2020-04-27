const express = require('express')

const ConverterController = require('./Controllers/ConverterController')

const routes = express.Router()

routes.post('/csvToJson', ConverterController.csvToJSON)
routes.post('/jsonToCsv', ConverterController.jsonToCSV)

module.exports = routes