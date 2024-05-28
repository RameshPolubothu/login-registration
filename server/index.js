const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const EmployeeModel = require('./models/employess.js'); // Adjust the path if necessary

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.post('/register', (req, res) => {
    console.log('Request Body:', req.body);
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json(err));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({email : email})
  .then(user => {
    if(user){
      if(user.password === password){
        res.json("Sucessful login")
      }
      else{
        res.json("Password is incorrect")
      }
    }
    else{
      res.json("Email was not Registered")
    }
  })
});


app.post('/home', (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
