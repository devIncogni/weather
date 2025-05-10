import { format, fromUnixTime } from "date-fns";
import getProcessedWeatherData from "./api-handler";
import CurrentWeather from "./CurrentWeather";
import MoreDetails from "./CurrentWeatherMoreDetails";
import WeekDayToDay from "./DayToDay";
import TodayHourToHour from "./TodayHourToHour";
// import WeatherHomePage from "./WeatherHomePage";
import locationHandler from "./location-handler";

const currentWeather = new CurrentWeather(
  document.querySelector(".current-temperature .date-time"),
  document.querySelector(".current-temperature .temperature"),
  document.querySelector(".icon-and-sunrise-sunset .current-weather-icon"),
  document.querySelector(".current-temperature .feels-like-data"),
  document.querySelector(".current-temperature .description")
);
const moreDetails = new MoreDetails(
  document.querySelector(".more-details .wind-speed .more-details-data"),
  document.querySelector(".more-details .humidity .more-details-data"),
  document.querySelector(".more-details .pressure .more-details-data"),
  document.querySelector(".more-details .precipitation .more-details-data")
);
// const weatherHomePage = new WeatherHomePage();

const hour = {
  0: new TodayHourToHour(
    document.querySelector(".hour-0 .hour-icon img"),
    document.querySelector(".hour-0 .day-avg-temperature")
  ),
  3: new TodayHourToHour(
    document.querySelector(".hour-3 .hour-icon img"),
    document.querySelector(".hour-3 .day-avg-temperature")
  ),
  6: new TodayHourToHour(
    document.querySelector(".hour-6 .hour-icon img"),
    document.querySelector(".hour-6 .day-avg-temperature")
  ),
  9: new TodayHourToHour(
    document.querySelector(".hour-9 .hour-icon img"),
    document.querySelector(".hour-9 .day-avg-temperature")
  ),
  12: new TodayHourToHour(
    document.querySelector(".hour-12 .hour-icon img"),
    document.querySelector(".hour-12 .day-avg-temperature")
  ),
  15: new TodayHourToHour(
    document.querySelector(".hour-15 .hour-icon img"),
    document.querySelector(".hour-15 .day-avg-temperature")
  ),
  18: new TodayHourToHour(
    document.querySelector(".hour-18 .hour-icon img"),
    document.querySelector(".hour-18 .day-avg-temperature")
  ),
  21: new TodayHourToHour(
    document.querySelector(".hour-21 .hour-icon img"),
    document.querySelector(".hour-21 .day-avg-temperature")
  ),
};

const days = {
  0: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-1 .week-day"),
    document.querySelector("#seven-days-forecast .day-1 .date"),
    document.querySelector(
      "#seven-days-forecast .day-1 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-1 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-1 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-1 .icon-condition .condition"
    )
  ),
  1: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-2 .week-day"),
    document.querySelector("#seven-days-forecast .day-2 .date"),
    document.querySelector(
      "#seven-days-forecast .day-2 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-2 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-2 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-2 .icon-condition .condition"
    )
  ),
  2: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-3 .week-day"),
    document.querySelector("#seven-days-forecast .day-3 .date"),
    document.querySelector(
      "#seven-days-forecast .day-3 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-3 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-3 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-3 .icon-condition .condition"
    )
  ),
  3: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-4 .week-day"),
    document.querySelector("#seven-days-forecast .day-4 .date"),
    document.querySelector(
      "#seven-days-forecast .day-4 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-4 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-4 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-4 .icon-condition .condition"
    )
  ),
  4: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-5 .week-day"),
    document.querySelector("#seven-days-forecast .day-5 .date"),
    document.querySelector(
      "#seven-days-forecast .day-5 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-5 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-5 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-5 .icon-condition .condition"
    )
  ),
  5: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-6 .week-day"),
    document.querySelector("#seven-days-forecast .day-6 .date"),
    document.querySelector(
      "#seven-days-forecast .day-6 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-6 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-6 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-6 .icon-condition .condition"
    )
  ),
  6: new WeekDayToDay(
    document.querySelector("#seven-days-forecast .day-7 .week-day"),
    document.querySelector("#seven-days-forecast .day-7 .date"),
    document.querySelector(
      "#seven-days-forecast .day-7 .min .seven-days-min-max-data"
    ),
    document.querySelector(
      "#seven-days-forecast .day-7 .max .seven-days-min-max-data"
    ),
    document.querySelector("#seven-days-forecast .day-7 .icon-condition img"),
    document.querySelector(
      "#seven-days-forecast .day-7 .icon-condition .condition"
    )
  ),
};

const weatherDomHandler = (async () => {
  const processedWeatherData = await getProcessedWeatherData(
    (await locationHandler).currentLocation
  );

  // #region current weather settings
  currentWeather.setDateTime(
    processedWeatherData.currentConditions.datetimeEpoch
  );
  currentWeather.setTemp(processedWeatherData.currentConditions.temp);
  currentWeather.setFeelsLike(processedWeatherData.currentConditions.feelslike);
  currentWeather.setDescription(processedWeatherData.description);
  // #endregion current weather settings

  // #region current weather more details settings
  moreDetails.setWindSpeed(processedWeatherData.currentConditions.windspeed);
  moreDetails.setHumidity(processedWeatherData.currentConditions.humidity);
  moreDetails.setPressure(processedWeatherData.currentConditions.pressure);
  moreDetails.setPrecipitationProbability(
    processedWeatherData.currentConditions.precipprob
  );
  // #endregion current weather more details settings

  // #region current weather hour to hour settings
  const hourToHourKeys = Object.keys(hour);
  hourToHourKeys.forEach((key) => {
    const currentHour = hour[key];
    const { temp, icon } = processedWeatherData.dayData[0].hours[key / 3];

    currentHour.setTemperature(temp);
    currentHour.setIcon(icon);
  });
  // #endregion current weather hour to hour settings

  // #region day to day settings
  const dayToDayKeys = Object.keys(days);
  dayToDayKeys.forEach((key) => {
    const currentDay = days[key];
    const { datetimeEpoch, tempmax, tempmin, conditions, icon } =
      processedWeatherData.dayData[key];

    const dayName = format(fromUnixTime(datetimeEpoch), "iiii");
    const currentDate = format(fromUnixTime(datetimeEpoch), "d MMMM");

    currentDay.setDayName(dayName);
    currentDay.setDateDisplay(currentDate);
    currentDay.setMinTemp(tempmin);
    currentDay.setMaxTemp(tempmax);
    currentDay.setCondition(conditions);
    currentDay.setIcon(icon);
  });

  // #endregion day to day settings
})();

export default weatherDomHandler;
