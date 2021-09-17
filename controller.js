

var model = require('./model')
async function createEmployee(userName, password, role) {
    try {
        var readData = await model.readDataHospital('dataHospital')
        var newDataEmployee = {
            idEmploye: readData.employee.length +1,
            userName: userName,
            password: password,
            role: role,
            isLogin: false
        }

        readData.employee.push(newDataEmployee)
        var dataStringify = JSON.stringify(readData)
        await model.writeDataHospital('dataHospital', dataStringify)
        var totalEmploye = readData.employee.length
        console.log('saved data success.', newDataEmployee, 'Total Employe: ', totalEmploye)
    } catch {
        console.log(err)
    }
}

async function userLogin(userName, password) {
    try {
        var readData = await model.readDataHospital('dataHospital')
        var existUsername = false
        for (var i = 0; i < readData.employee.length; i++) {
            if (userName === readData.employee[i].userName && password === readData.employee[i].password) {
                readData.employee[i].isLogin = true
                existUsername = true
            } 
        }
        if (existUsername === true) { // kalo gini brarti yang ganti isLogin = true tuh yang index terakhir dalem data
            var jsonStringify = JSON.stringify(readData)
            await model.writeDataHospital('dataHospital', jsonStringify)
            console.log('user', userName, 'logged in successfully!')  // username bisa ambil dari tmpt lain selain readData
        } else {
            console.log('username and password wrong')
        }
    } catch {
        console.log(err)
    }
}

async function createPatient(namePattient, gender, age, sickness) {
    try {
        var readData = await model.readDataHospital('dataHospital')
        var isLogin = false
        var isDoctor = false
        for (var i = 0; i < readData.employee.length; i++) {
            if (readData.employee[i].isLogin === true) {
                isLogin = true
                if (readData.employee[i].role === 'doctor') {
                    isDoctor = true
                }
            }
        }
        if (isLogin === true) {
            if (isDoctor) {
                var addPatient = {
                    idPatient: readData.patient.length +1,
                    namePatient: namePattient,
                    gender: gender,
                    age: age,
                    sickness: sickness
                }
                readData.patient.push(addPatient)
                var dataPatientStringify = JSON.stringify(readData)
                await model.writeDataHospital('dataHospital', dataPatientStringify)
                var totalPatient = readData.patient.length
                console.log('data pasien berhasil ditambahkan.', 'Total Pasien: ', totalPatient)
            } else {
                console.log('tidak memiliki akses untuk menambahkan pasien')
            }
        } else {
            console.log('mohon untuk login dahulu untuk menambahkan pasien')
        }
    } catch {
        console.log(err)
    }
}

async function userLogOut() {
    try {
        var readData = await model.readDataHospital('dataHospital')
        for (var i = 0; i < readData.employee.length; i++) {
            if (readData.employee[i].isLogin === true) {
                readData.employee[i].isLogin = false
                var dataStringify = JSON.stringify(readData)
                await model.writeDataHospital('dataHospital', dataStringify)
                console.log('user', readData.employee[i].userName, 'logout successfully')
            } 
        }
    } catch {
        console.log(err)
    }
}
module.exports = {
    createEmployee,
    userLogin,
    createPatient,
    userLogOut
}