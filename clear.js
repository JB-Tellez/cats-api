require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const Cat = require('./models/cat');

async function clear() {
  try {
    await Cat.deleteMany({});
    console.log('Cats cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();
