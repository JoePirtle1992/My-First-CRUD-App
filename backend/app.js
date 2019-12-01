const express = require('express');
const app = express();
const mahFirstRoute = require('./routes/mahFirstRoute');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'})

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors());
app.options('*', cors())
app.use('/v1/mazzystar', mahFirstRoute);

const DAPORT = process.env.MYPORT || 5000;
const MYDATABASE = process.env.MYDATABASE

mongoose.connect(MYDATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(console.log('AINT NO STOPPIN US NOW!!!'))

app.listen(DAPORT, () => {
    console.log(`Listening to ${DAPORT}`)
})