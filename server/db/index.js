//this is the access point for all things database related!

const db = require('./db');
const User = require('./models/User');
const Subject = require('./models/Subject');
const Article = require('./models/Article');

// Associations
Subject.hasMany(Article);
Article.belongsTo(Subject);

module.exports = {
  db,
  models: {
    User,
    Subject,
    Article,
  },
};
