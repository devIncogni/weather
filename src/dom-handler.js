import getProcessedWeatherData from "./api-handler";
import CurrentWeather from "./CurrentWeather";
import MoreDetails from "./CurrentWeatherMoreDetails";
import WeekDayToDay from "./DayToDay";
import TodayHourToHour from "./TodayHourToHour";
import WeatherHomePage from "./WeatherHomePage";
import locationHandler from "./location-handler";

const currentWeather = new CurrentWeather(
  document.querySelector(".current-temperature .date-time"),
  document.querySelector(".current-temperature .temperature"),
  document.querySelector(".icon-and-sunrise-sunset .current-weather-icon"),
  document.querySelector(".current-temperature .feels-like-data"),
  document.querySelector(".current-temperature .description")
);
const moreDetails = new MoreDetails();
const weatherHomePage = new WeatherHomePage();

const hour = {
  0: new TodayHourToHour(),
  3: new TodayHourToHour(),
  6: new TodayHourToHour(),
  9: new TodayHourToHour(),
  12: new TodayHourToHour(),
  15: new TodayHourToHour(),
  18: new TodayHourToHour(),
  21: new TodayHourToHour(),
};

const days = {
  0: new WeekDayToDay(),
  1: new WeekDayToDay(),
  2: new WeekDayToDay(),
  3: new WeekDayToDay(),
  4: new WeekDayToDay(),
  5: new WeekDayToDay(),
  6: new WeekDayToDay(),
};

// let processedWeatherData;
// getProcessedWeatherData("Lucknow").then((data) => {
//   processedWeatherData = data;
//   console.log(processedWeatherData);
// });

const weatherDomHandler = (async () => {
  const processedWeatherData = await getProcessedWeatherData(
    (await locationHandler).currentLocation
  );

  currentWeather.setDateTime(
    processedWeatherData.currentConditions.datetimeEpoch
  );
  currentWeather.setTemp(processedWeatherData.currentConditions.temp);
  currentWeather.setFeelsLike(processedWeatherData.currentConditions.feelslike);
  currentWeather.setDescription(processedWeatherData.description);
})();

export default weatherDomHandler;
