const mongoose = require('mongoose')
const express = require('express')
const bcrpt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const register = require('./model/regischema')
const app = express()
const secret = "hello"
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/home-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, "mongodb connectionerror"))
db.once('open', () => {
    console.log("mongodb connect ");
})

app.post('/register', async (req, res) => {
    try {

        const { email, password } = req.body
        const newpassword = await bcrpt.hash(password, 10)
        const saveuser = new register({
            email: email,
            password: newpassword
        })
        const saveduser = await saveuser.save()
        if (saveduser) {
            res.status(200).json({
                code: 200,
                message: "user add successfully",
                data: saveduser
            })
        }

    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message || "something went wrong"
        })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const isExist = await register.findOne({
            email
        })
        if (isExist) {
            const isvalid = await bcrpt.compare(password, isExist.password)
            if (isvalid) {
                const token = jwt.sign({ data: isExist }, secret, {
                    expiresIn: '12h'
                })
                res.status(200).json({
                    code: 200,
                    message: "Login successful",
                    token: token
                })
            } else {
                res.status(400).json({
                    code: 400,
                    message: "password is incorrect"
                })
            }
        }
        else {
            res.status(404).json({
                code: 404,
                message: "email is incorrect"
            })
        }
    }
    catch {
        res.status(404).json({
            code: 404,
            message: "please enter email or password"
        })
    }
})

app.listen(8080, () =>
    console.log('Server started on 8080')
);
