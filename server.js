// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require('express-handlebars');
// Sets up the Express App

// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/', require('./routes/router'));

// set the view engine to ejs
app.engine('handlebars', exphbs({ defaultPages: 'index' }));
app.set('view engine', 'handlebars');
// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//Routes

require("./routes/routermodule.js")(app);
var router = require("./routes/router.js")
app.use(router);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
