module.exports = {    
    
    jsonToCSV(req, res) {    
        const items = req.body
        const replacer = (key, value) => value === null ? '' : value
        const headers = req.headers

        let csv = items.map(row => headers.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        csv.unshift(headers.join(','))
        csv = csv.join('\r\n')

        return res.json({csv})
    },

    csvToJSON(req, res){
        console.log(req);
        
        const lines= req.split("\n")
        let headers=lines[0].split(",")

        let result = []

        for (let i = 1; i < lines.length; i++) {
            let obj= {};
            let currentLine = lines[i].split(",")

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j]
            }

            result.push(obj)
        }

        return res.json({result})

    }
}