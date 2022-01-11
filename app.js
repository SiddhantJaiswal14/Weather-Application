const express = require("express");
const app = express();

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Importing Route
const weatherRoute = require("./routes/weather");

//Use view engine
app.set("view engine", "ejs");

//Middleware routes
app.use("/", weatherRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
