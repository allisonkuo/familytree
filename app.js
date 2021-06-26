var Person = require("./models/person"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require('mongoose'),
    express = require("express"),
    app = express();
    
// App Configuration
mongoose.connect("mongodb://localhost:27017/familytree",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.set("view engine", "ejs");
app.use(express.static("public")); // link public directory i.e. css and js
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());

// global var to store the graph rn cuz haven't thought of something better
app.locals.relativesGraph;

// RESTFUL ROUTES
require("./routes/routes.js")(app, Person);

app.listen(3000, () => {
    console.log("======================== FamilyTree server is started =========================");
});