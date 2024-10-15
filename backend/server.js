const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: '../.env' })

const recipesRouter = require('./routes/recipes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/recipes', recipesRouter)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => {
    console.error('Failed to connect to MongoDB: ', err)
})



