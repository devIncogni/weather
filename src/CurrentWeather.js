import { format, fromUnixTime } from "date-fns";

export default class CurrentWeather {
  constructor(
    dateTimeDisplay,
    tempDisplay,
    iconDisplay,
    feelsLikeDisplay,
    descriptionDisplay,
    sunriseDisplay,
    sunsetDisplay
  ) {
    this.dateTimeDisplay = dateTimeDisplay;
    this.tempDisplay = tempDisplay;
    this.iconDisplay = iconDisplay;
    this.feelsLikeDisplay = feelsLikeDisplay;
    this.descriptionDisplay = descriptionDisplay;
    this.sunriseDisplay = sunriseDisplay;
    this.sunsetDisplay = sunsetDisplay;
  }

  setIcon(iconID) {
    import(`./weather-icons/${iconID}.svg`).then((icon) => {
      this.iconDisplay.src = icon.default;
    });
  }
  
  setDateTime(unixEpoch) {
    const dateTime = format(fromUnixTime(unixEpoch), "iii dd MMM HH:mm");
    this.dateTimeDisplay.textContent = dateTime;
  }

  setTemp(temp, unitGrp) {
    const temperatureString = temp >= 0 ? `+${temp}` : `-${temp}`;

    this.tempDisplay.textContent =
      unitGrp === "metric"
        ? `${temperatureString}°C`
        : `${temperatureString}°F`;
  }

  setFeelsLike(temp, unitGrp) {
    const temperatureString = temp >= 0 ? `+${temp}` : `-${temp}`;
    this.feelsLikeDisplay.textContent =
      unitGrp === "metric"
        ? `${temperatureString}°C`
        : `${temperatureString}°F`;
  }

  setDescription(description) {
    this.descriptionDisplay.textContent = description;
  }

  setSunRise(riseTime) {
    this.sunriseDisplay.textContent = `Sunrise: ${riseTime}`;
  }

  setSunSet(setTime) {
    this.sunsetDisplay.textContent = `Sunset: ${setTime}`;
  }
}
