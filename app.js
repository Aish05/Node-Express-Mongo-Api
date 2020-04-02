
const express = require('express')
const app = express();

const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')
const cors = require('cors')

//middlewares
app.use(cors())
app.use(bodyParser.json())

//Import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)




//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
        console.log('Connected to Db')
    })

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});


//Listening
app.listen(3000)