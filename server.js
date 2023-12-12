require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { readCats, createCat, deleteCat } = require('./handlers');


const PORT = process.env.PORT;
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // new

// database
mongoose.connect(process.env.MONGODB_URI);
console.log('connecting on', process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We\'re connected!', process.env.MONGODB_URI);
});

// routes
app.get('/cats', readCats);
app.post('/cats', createCat);
app.delete('/cats/:id', deleteCat);

// start server
app.listen(PORT, () => console.log('Listening on PORT', PORT));
