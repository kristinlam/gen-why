const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // don't link to same article more than once
    validate: {
      isUrl: true,
    },
  },
  source: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Article;
