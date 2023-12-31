require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => console.log('Server running on port 3000'));

app.use(express.json());

var planMaster = require('./routes/planMaster');
app.use('/planMaster', planMaster);
