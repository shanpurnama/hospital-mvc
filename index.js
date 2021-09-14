var process = require('process')
var fs = require('fs')
var command = process.argv.slice(2)
var controller = require('./controller')

if (command[0] === 'register') {
    controller.createEmployee(command[1], command[2], command[3])
} else if (command[0] === 'login') {
    controller.userLogin(command[1], command[2])
} else if (command[0] === 'addPatient') {
    controller.createPatient(command[1])
}