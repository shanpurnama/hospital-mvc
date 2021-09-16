var process = require('process')
var fs = require('fs')
var command = process.argv.slice(2)
var controller = require('./controller')

if (command[0] === 'register') {
    controller.createEmployee(command[1], command[2], command[3])
} else if (command[0] === 'login') {
    controller.userLogin(command[1], command[2])
} else if (command[0] === 'addPatient') {
    controller.createPatient(command[1], command[2], command[3], command.slice(4))
} else if (command[0] === 'logout') {
    controller.userLogOut(command[1], command[2])
} else {
    console.log('')
    console.log('--------------- REGISTER ---------------')
    console.log('user will create a new employee to enter into database')
    console.log('<register> <idEmployee> <userName> <role> <isLogin>')
    console.log('------------------------------------------------------')
    console.log('')
    console.log('--------------- LOGIN ---------------')
    console.log('the first user should login when they will add patient')
    console.log('<login> <userName> <password>')
    console.log('------------------------------------------------------')
    console.log('')
    console.log('--------------- ADD PATIENT ---------------')
    console.log('is login must true and role must doctor when they add patient into database')
    console.log('<addPatient> <idPatient> <namePatient> <gender> <age> <sickness>')
    console.log('---------------------------------------------------------------------------')
    console.log('')
    console.log('--------------- LOGOUT ---------------')
    console.log('user should logout and then is login must false when they successed add new patient')
    console.log('<logout>')
    console.log('-----------------------------------------------------------------------------------')
    console.log('')
}