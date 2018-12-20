module.exports = {
    up: function (queryInterface, Sequelize) {
      //insert facebook auth type into slapauth table
      return queryInterface.bulkInsert('Countries',[
          {country_name : 'United States', country_code: 'us', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'Russia', country_code: 'ru', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'Italy', country_code: 'it', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'France', country_code: 'fr', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'United Kingdom', country_code: 'gb', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'Mexico', country_code: 'mx', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'Netherlands', country_code: 'nl', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'South Africa', country_code: 'za', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'Colombia', country_code: 'co', createdAt:new Date(),updatedAt:new Date()},
          {country_name : 'Cuba', country_code: 'cu', createdAt:new Date(),updatedAt:new Date()},
        ])
    },
   
    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Countries', null, {truncate : true});
    }
};