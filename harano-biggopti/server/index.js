const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')
const multer = require('multer')
const path = require('path')

app.use(express.json())
app.use(cors())

const UPLOADS = "./uploads/"

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, UPLOADS)
    },
    filename : (req, file, cb) =>{
        const fileExt = path.extname(file.originalname)
        const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(" ")
                            .join("-")+"-"+Date.now()
        cb(null, fileName+fileExt)
    },
})

var upload = multer({
    storage : storage
})

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

app.post('/create_posts', upload.single('image'), (req, res) => {
    const setTitle = req.body.title;
    const setCategory = req.body.category;
    const setDescription = req.body.description;
    const setStatus = req.body.status;
    const setSecurityQuestion = req.body.securityQuestion;
    const setSecurityAnswer = req.body.securityAnswer;
    const image = req.file ? req.file.filename : null
    const setTags = req.body.tags;
    const setPersonName = req.body.person_name;
    const setPersonAge = req.body.person_age;
    const setGender = req.body.gender;
    const setAnimal = req.body.animal;
    const setGovtPaperType = req.body.govt_paper_type;
    const setCertificateType = req.body.certificate_type;

    const SQL = `
        INSERT INTO LostAndFound (
            title, category, description, status, 
            security_question, security_question_answer, 
            image, tags, person_name, person_age, gender, 
            animal, govt_paper_type, certificate_type
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const Values = [
        setTitle, setCategory, setDescription, setStatus,
        setSecurityQuestion, setSecurityAnswer, image, setTags,
        setPersonName, setPersonAge, setGender,
        setAnimal, setGovtPaperType, setCertificateType
    ];

    db.query(SQL, Values, (error, results) => {
        if (error) {
            console.log(error);
            return res.json({ message: 'Error occurred during insertion.' });
        } else {
            console.log(results);
            return res.json({ message: 'Lost and Found data inserted successfully!' });
        }
    });
});

app.listen(2000, () => {
    console.log(`server at 2000`)
}) 