#!/bin/bash
node make-seed.js > json.txt
printf "Hello World"
echo "const mongoose = require('mongoose');" > seed.js
echo "const db = require('../models');" >> seed.js
echo "" >> seed.js
echo "mongoose.connect('mongodb://localhost/asteriaDB', {
  useNewUrlParser: true,
  useFindAndModify: false
})" >> seed.js
echo "let userSeed = [" >> seed.js
cat json.txt >> seed.js
echo "]" >> seed.js
echo "db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })" >> seed.js