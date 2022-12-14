// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const moment = require("moment");
console.log(moment(new Date()).format("DD/MM/YYYY HH:mm"))
// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

hbs.registerHelper("dateFormat", (date) => {
    console.log("la fecha es: ", date);
    return moment(date).format("DD/MM/YYYY")
})

// Registrar helper


const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "TravelBook";

app.locals.appTitle = `${capitalize(projectName)}`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

//localhost:3000/auth
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

//ruta post
const postRoutes = require("./routes/post.routes");
app.use("/", postRoutes);

const startPagesRoutes = require("./routes/startPages.routes");
app.use("/", startPagesRoutes);

//localhost:3000/user
const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

//localhost:3000/country
const countryRoutes = require("./routes/country.routes");
app.use("/country", countryRoutes);

//ruta de comments
const commentRoutes = require("./routes/comment.routes");
// app.use("/comment", commentRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
