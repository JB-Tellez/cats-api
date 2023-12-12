require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const Cat = require('./models/cat');

async function seed() {
  // seed the database with some cats, so I can retrieve them
  const myCat = new Cat({
    name: 'Jimmy John',
    color: 'orange',
    hasClaws: false,
    location: 'Seattle',
  });
  await myCat.save();
  console.log('saved Jimmy John');

  // alternately...
  await Cat.create({
    name: 'Jersey  Mike',
    color: 'calico',
    hasClaws: true,
    location: 'Paris'
  });

  console.log('saved Jersey Mike');

  mongoose.disconnect();
}

seed();
