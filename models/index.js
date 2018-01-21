const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

if (config.use_env_variable) {
  var db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var db = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = db;
