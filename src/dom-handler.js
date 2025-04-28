import CurrentWeather from "./CurrentWeather";
import MoreDetails from "./CurrentWeatherMoreDetails";
import WeekDayToDay from "./DayToDay";
import TodayHourToHour from "./TodayHourToHour";
import WeatherHomePage from "./WeatherHomePage";

const currentWeather = new CurrentWeather();
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

const weatherDomHandler = (() => {

    
  const setCurrentTemp = (temperature) => {};
})();

export default weatherDomHandler;
