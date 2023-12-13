require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { createCat, readCats, updateCat, deleteCat } = require('./handlers');


const PORT = process.env.PORT;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We\'re connected!');
});

// routes
app.get('/cats', readCats);
app.post('/cats', createCat);
app.delete('/cats/:id', deleteCat);
app.put('/cats/:id', updateCat);

// start server
app.listen(PORT, () => console.log('Listening on PORT', PORT));
