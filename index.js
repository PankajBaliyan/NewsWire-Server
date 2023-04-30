const express = require('express')
const mongoose = require('mongoose')
const app = express()

const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000'
}))

//* dotenv configuration
require('dotenv').config();
const port = process.env.PORT
const URI = process.env.URI;

// Connect to MongoDB
mongoose.connect(URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(() => {
        console.log('Connection failed')
    })

// used to send data to React
app.use(express.json())

// Routes
const newsRoutes = require('./routes/news')
app.use(newsRoutes);

// Start server
app.listen(port, () => console.log(`App listening on port http://localhost:${port}`))