module.exports = {
    up: function (queryInterface, Sequelize) {
      //insert facebook auth type into slapauth table
      return queryInterface.bulkInsert('Categories',[
          {category_name : 'business', createdAt:new Date(),updatedAt:new Date()},
          {category_name : 'entertainment', createdAt:new Date(),updatedAt:new Date()},
          {category_name : 'general', createdAt:new Date(),updatedAt:new Date()},
          {category_name : 'health', createdAt:new Date(),updatedAt:new Date()},
          {category_name : 'science', createdAt:new Date(),updatedAt:new Date()},
          {category_name : 'sports', createdAt:new Date(),updatedAt:new Date()},
          {category_name : 'technology', createdAt:new Date(),updatedAt:new Date()}
        ])
    },
   
    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Categories', null, {truncate : true});
    }
};