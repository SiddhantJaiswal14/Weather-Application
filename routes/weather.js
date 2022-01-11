const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();
router.get("/", (req, res) => {
  res.render("index", {
    city: "City",
    des: "Enter location to get weather information",
    temp: "Temp",
    minimum: "Temp",
    maximum: "Temp",
    ctry: "Country",
  });
});

router.post("/", async (req, res) => {
  const city = req.body.city;
  // console.log(process.env.API_KEY);
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;

  try {
    await fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "city not found") {
          res.render("index", {
            city: data.message,
            des: null,
            temp: null,
            minimum: null,
            maximum: null,
            ctry: null,
          });
        } else {
          const city = data.name;
          const des = data.weather[0].main;
          // const icon = data.weather[0].icon;
          const temp = data.main.temp;
          const minimum = data.main.temp_min;
          const maximum = data.main.temp_max;
          const ctry = data.sys.country;

          res.render("index", {
            city,
            des,
            temp,
            minimum,
            maximum,
            ctry,
          });
        }
      });
  } catch (err) {
    res.render("index", {
      city: "Something went wrong",
      des: null,
      temp: null,
      minimum: null,
      maximum: null,
      ctry: null,
    });
  }
});

module.exports = router;
