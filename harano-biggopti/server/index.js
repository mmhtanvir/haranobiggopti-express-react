const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')

app.use(express.json())
app.use(cors())

dotenv.config({path: './.env'})

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.UNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('db connected')
    }
})

app.post('/signup', (req,res)=>{
    const setName = req.body.name
    const setEmail = req.body.email
    const setNumber = req.body.number
    const setPassword = req.body.password

    const SQL = 'INSERT INTO users (name, email, number, password) VALUES(?,?,?,?)'

    const Values = [setName, setEmail, setNumber, setPassword]

    
    db.query(SQL, Values, (error, results) =>{
        if(error){
            console.log(error)
        } else{
            console.log(results)
            return res.json({ message: 'User Registered successfully!' });
        }
    })

})

app.post('/login', (req,res)=>{
    const setLoginNumber = req.body.LoginNumber
    const setLoginPassword = req.body.LoginPassword

    const SQL = 'SELECT * FROM users WHERE number = ? AND password = ?'
    const Values = [setLoginNumber, setLoginPassword]

    
    db.query(SQL, Values, (error, results) =>{
        if(error){
            console.log(error)
        }
        if(results.length > 0){
            console.log(results)
            return res.json({ message: 'User logged in successfully!' });
        }
        else{
            console.log('no user found or wrong credentials')
            return res.json({ message: 'no user found or wrong credentials' });
        }
    })

})

app.listen(2000, () => {
    console.log(`server at 2000`)
})