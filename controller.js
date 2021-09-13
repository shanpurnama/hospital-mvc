var fs = require('fs')
var model = require('./model')
async function createEmployee(userName, password, role) {
    try {
        var readData = await model.readDataHospital('dataHospital')
        var newDataEmployee = {
            userName: userName,
            password: password,
            role: role
        }

        readData.employee.push(newDataEmployee)
        var dataStringify = JSON.stringify(readData)
        await model.writeDataHospital('dataHospital', dataStringify)
        var totalEmploye = readData.employee.length
        console.log(totalEmploye)
        console.log('saved data success')
    } catch {
        console.log(err)
    }
}

module.exports = {
    createEmployee
}