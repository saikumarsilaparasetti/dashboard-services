require('dotenv').config();

global.config = process.env
const express = require('express');

const mongoose = require('mongoose');
const router = require('./routes');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to log all incoming requests with timestamp
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    console.log(`=>${req.method} ${req.url}  ${timestamp} `);
    next();
});
app.use("/", router)

mongoose.connect(config.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log(`Connected to DB :`, config.DB_URL);
            app.listen(config.PORT, ()=>{
                console.log(`Server is running on port :`, config.PORT);
            })
        }).catch(err=>{
            console.error(err);
        });

