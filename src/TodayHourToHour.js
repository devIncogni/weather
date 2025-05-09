export default class TodayHourToHour {
  constructor(iconDisplay, temperatureDisplay) {
    this.iconDisplay = iconDisplay;
    this.temperatureDisplay = temperatureDisplay;
  }

  setIcon(iconID) {
    this.iconDisplay.src = "./clear-day.svg";
  }

  setTemperature(temp) {
    this.temperatureDisplay.textContent = `${temp}°C`;
  }
}
