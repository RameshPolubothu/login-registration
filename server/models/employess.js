const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
        name : String,
        email : String,
        password : String,
        rpassword : String
})

const EmployeeModel = mongoose.model('Employees', EmployeeSchema);

module.exports = EmployeeModel;
