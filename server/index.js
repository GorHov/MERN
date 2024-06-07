const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)
const start = async() => {
    try {
        await mongoose.connect(process.env.DB)
        app.listen(PORT , () => console.log(`server run on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()