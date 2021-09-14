

var model = require('./model')
async function createEmployee(userName, password, role) {
    try {
        var readData = await model.readDataHospital('dataHospital')
        var newDataEmployee = {
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
                existUsername = true
            } 
        }
        if (existUsername === true) {
            // console.log('masuk')
            readData.employee[readData.employee.length -1].isLogin = true // kalo gini brarti yang ganti isLogin = true tuh yang index terakhir dalem data
            var jsonStringify = JSON.stringify(readData)
            await model.writeDataHospital('dataHospital', jsonStringify)
            console.log('user', readData.employee[readData.employee.length -1].userName, 'logged in successfully!')  // username bisa ambil dari tmpt lain selain readData
        } else {
            console.log('username and password wrong')
        }
    } catch {
        console.log(err)
    }
}

async function createPatient(userName, password) {
    try {
        var readData = await model.readDataHospital('dataHospital')
        var isDoctor = false
        for(var i = 0; i < readData.employee.length; i++) {
            if (readData.employee[i].role === 'doctor') { // check isLogin dulu baru cek isDoctor, kalo berhasil lanjut create patient, kalo gagal show error
                isDoctor = true
            }
        }
        if (isDoctor === true) {
            console.log('ini doctor')
            var addPatient = {
                userName: userName,
                sickness: [
                    
                ]
            }
        } else {
            console.log('bukan dokter kamu')
        }
    } catch {
        console.log(err)
    }
}

module.exports = {
    createEmployee,
    userLogin,
    createPatient
}


// userName ==== userName && password === password
// isLogin = true
