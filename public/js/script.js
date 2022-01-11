const curDate = document.getElementById("date");
let weathercon = document.getElementById("weather-info").innerText;

let weather_icon = document.getElementById("weather-icon");

if (weathercon == "Sunny") {
  weather_icon.innerHTML =
    "<i class='fas fa-sun fa-3x' style='color:#f6f606;'></i>";
} else if (weathercon == "Clouds") {
  weather_icon.innerHTML =
    "<i class='fas fa-cloud fa-3x' style='color:#fff;'></i>";
} else if (weathercon == "Rainy") {
  weather_icon.innerHTML =
    "<i class='fas fa-cloud-rain fa-3x' style='color:#6DC1FF;'></i>";
} else if (weathercon == "Thunderstorm") {
  weather_icon.innerHTML =
    "<i class='fas fa-bolt fa-3x' style='color:#ffdf00;'></i>";
} else if (weathercon == "Snow") {
  weather_icon.innerHTML =
    "<i class='fas fa-snowflake fa-3x' style='color:#fff;'></i>";
} else if (weathercon == "Clear") {
  weather_icon.innerHTML =
    "<i class='fas fa-cloud-sun fa-3x' style='color:#fff157;'></i>";
} else {
  weather_icon.innerHTML =
    "<i class='fas fa-cloud fa-3x' style='color:#fff;'></i>";
}

const getCurrentDay = () => {
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let currentTime = new Date();
  let day = weekday[currentTime.getDay()];
  return day;
};

const getCurrentTime = () => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  let now = new Date();
  let month = months[now.getMonth()];
  let date = now.getDate();

  let hours = now.getHours();
  let mins = now.getMinutes();

  let periods = "AM";
  if (hours > 11) {
    periods = "PM";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  return `| ${month} ${date} | ${hours}:${mins} ${periods}`;
};

curDate.innerHTML = getCurrentDay() + " " + getCurrentTime();
