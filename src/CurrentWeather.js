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

  setTemp(temp) {
    const temperatureString = temp >= 0 ? `+${temp}` : `-${temp}`;
    this.tempDisplay.textContent = `${temperatureString}°C`;
  }

  setFeelsLike(temp) {
    const temperatureString = temp >= 0 ? `+${temp}` : `-${temp}`;
    this.feelsLikeDisplay.textContent = `${temperatureString}°C`;
  }

  setDescription(description) {
    this.descriptionDisplay.textContent = description;
  }
}
