// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require('sequelize');
var config = require('./config.js');
var devConf = config.development;

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize(devConf.database, devConf.username, devConf.password, {
  host: devConf.host,
  port: 3306,
  dialect: devConf.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//Checking connection status
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

// force: true will drop the table if it already exists
sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

// Exports the connection for other files to use
module.exports = sequelize;
