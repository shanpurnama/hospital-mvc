var fs = require('fs')

function readDataHospital(dataType) {
    return new Promise ((resolve, reject) => {
        fs.readFile(`./db/${dataType}.json`, 'utf-8', function(err, data) {
            if (err) {
                reject(err)
            } else {
                var readDataHospital = JSON.parse(data)
                resolve(readDataHospital)
            }    
        })
    })
}

function writeDataHospital(dataType, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./db/${dataType}.json`, data, 'utf-8', function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
            
        })
    })

}

module.exports = {
    readDataHospital,
    writeDataHospital
}