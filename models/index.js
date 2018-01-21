const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

var db = null;

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = db;
