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
            return res.render({message : 'user registered!'})
        }
    })

})

app.listen(2000, () => {
    console.log(`server at 2000`)
})