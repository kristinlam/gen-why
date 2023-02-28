//this is the access point for all things database related!

const db = require('./db');
const User = require('./models/User');
const Subject = require('./models/Subject');

// Associations

module.exports = {
  db,
  models: {
    User,
    Subject,
  },
};
