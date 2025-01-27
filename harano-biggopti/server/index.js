const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const { sequelize, connectToDB } = require('./db');
const { User, Posts } = require('./models');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

const UPLOADS = "./uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    },
});

const upload = multer({
    storage: storage
});

dotenv.config({ path: './.env' });

app.post('/signup', async (req, res) => {
    const setName = req.body.name;
    const setEmail = req.body.email;
    const setNumber = req.body.number;
    const setPassword = req.body.password;

    try {
        const user = await User.create({
            name: setName,
            email: setEmail,
            number: setNumber,
            password: setPassword,
        });

        return res.status(201).json({ message: 'User Registered successfully!', user });
    } catch (error) {
        return res.status(500).json({ message: 'Error occurred during user registration' });
    }
});

app.post('/login', async (req, res) => {
    const setLoginNumber = req.body.LoginNumber;
    const setLoginPassword = req.body.LoginPassword;

    try {
        const user = await User.findOne({
            where: { number: setLoginNumber, password: setLoginPassword },
        });

        if (user) {
            return res.status(200).json({ message: 'User logged in successfully', user });
        } else {
            return res.status(401).json({ message: 'Invalid login number or password' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Database error' });
    }
});

app.post('/create_posts', upload.single('image'), async (req, res) => {
    const setTitle = req.body.title;
    const setCategory = req.body.category;
    const setDescription = req.body.description;
    const setSecurityQuestion = req.body.securityQuestion;
    const setSecurityAnswer = req.body.securityAnswer;
    const image = req.file ? req.file.filename : null;
    const setTags = req.body.tags;
    const setPersonName = req.body.person_name;
    const setPersonAge = req.body.person_age;
    const setGender = req.body.gender;
    const setAnimal = req.body.animal;
    const setGovtPaperType = req.body.govt_paper_type;
    const setCertificateType = req.body.certificate_type;
    const contactName = req.body.contact_name;
    const contactPhoneNumber = req.body.contact_phone_number;
    const contactEmailAddress = req.body.contact_email_address;

    try {
        const post = await Posts.create({
            title: setTitle,
            category: setCategory,
            description: setDescription,
            security_question: setSecurityQuestion,
            security_question_answer: setSecurityAnswer,
            imageUpload: image,
            tags: setTags,
            personName: setPersonName,
            personAge: setPersonAge,
            personGender: setGender,
            petBreed: setAnimal,
            documentType: setGovtPaperType,
            certificateType: setCertificateType,
            dateLostFound: new Date(),
            timeLostFound: new Date().toLocaleTimeString(),
            contactName: contactName,
            contactPhoneNumber: contactPhoneNumber,
            contactEmailAddress: contactEmailAddress
        });

        return res.status(201).json({ message: 'Lost and Found data inserted successfully!', post });
    } catch (error) {
        return res.status(500).json({ message: 'Error occurred during post creation', error });
    }
});

app.get('/', async (req, res) => {
    try {
        const posts = await Posts.findAll();
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching posts.' });
    }
});

app.listen(2000, async () => {
    console.log(`Server running on port 2000`);
    await connectToDB();
});
