import express from 'express'
import mongoose from 'mongoose'
import { mongoDBURI } from './mongodb.js';
import User from './models/User.js';
import { comparePassword, hashpassword } from './utlis/helper.js';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')

})
const verifyToken = (req, res, next) => {
    let token = req.cookies.token
    jwt.verify(token, "jwt-web-token", (err, decode) => {
        if (err) {
            res.status(401).send("token is not available")
        }

    })
    next()
}

app.get('/home', verifyToken, (req, res) => {
    res.status(200).send("success")
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(401).json({ msg: "user doesn't exist. Please register" })

        if (comparePassword(password, user.password)) {
            const token = jwt.sign({ email: user.email }, "jwt-web-token", { expiresIn: '1d' })
            res.cookie("token", token)
            res.json("success")
        }
        else {
            res.json({ error: "Invalid Credential!" });
        }
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    try {
        if (!name || !email || !password) return res.status(400).json("Please fill out all fields")
        const isexist = await User.findOne({ email });

        if (isexist)
            res.status(401).json({ msg: "user already exist" })
        else {
            let hashpass = hashpassword(password)
            await User.create({ name, email, password: hashpass })
            res.status(201).json("success")
        }
    } catch (error) {
        res.sendStatus(500)
    }

})
app.listen(8000, () => {
    console.log('App is Running on port 8000')
    mongoose.connect(mongoDBURI)
        .then(() => console.log("MongoDB is connected"))
        .catch((e) => console.log(console.error(e)))
})
