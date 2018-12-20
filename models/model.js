var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var model = {};

var user = sequelize.define('Users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    values: ['M', 'F']
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

var category = sequelize.define('Categories', {
  category_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

var userCategory = sequelize.define('UserCategory', {
  category_ranking: {
      type: Sequelize.INTEGER
  }
});

var country = sequelize.define('Countries', { 
  country_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country_code: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

var userCountries = sequelize.define('UserCountries', {});

user.belongsToMany(category, {
  through: userCategory,
  foreignKey: 'UserId',
  otherKey: 'CategoryId'
});

category.belongsToMany(user, {
  through: userCategory,
  foreignKey: 'CategoryId',
  otherKey: 'UserId'
});

country.belongsToMany(user, {
  through: userCountries,
  foreignKey: 'CountryId',
  otherKey: 'UserId'
});

user.belongsToMany(country, {
  through: userCountries,
  foreignKey: 'UserId',
  otherKey: 'CountryId'
});

model.User = user;
model.Category = category;
model.Country = country;
model.UserCategory = userCategory;
model.UserCountry = userCountries;
// model.Articles = articles; 

module.exports = model;
module.exports = user;
// module.exports = articles;