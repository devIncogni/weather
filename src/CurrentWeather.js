import { format, fromUnixTime } from "date-fns";

export default class CurrentWeather {
  constructor(
    dateTimeDisplay,
    tempDisplay,
    iconDisplay,
    feelsLikeDisplay,
    descriptionDisplay
  ) {
    this.dateTimeDisplay = dateTimeDisplay;
    this.tempDisplay = tempDisplay;
    this.iconDisplay = iconDisplay;
    this.feelsLikeDisplay = feelsLikeDisplay;
    this.descriptionDisplay = descriptionDisplay;
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
}
