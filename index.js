const express = require('express')
const mongoose = require('mongoose')
const app = express()

//* Client Request setup START
const cors = require('cors')
app.use(cors({
    // For Development 👇
    // origin: 'http://localhost:3000'

    // For Production
    origin: 'https://newswire-client.onrender.com'
}))
//! End

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