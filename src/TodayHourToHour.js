export default class TodayHourToHour {
  constructor(iconDisplay, temperatureDisplay) {
    this.iconDisplay = iconDisplay;
    this.temperatureDisplay = temperatureDisplay;
  }

  setIcon(iconID) {
    import("./clear-day.svg").then((icon) => {
      this.iconDisplay.src = icon.default;
    });
  }

  setTemperature(temp) {
    this.temperatureDisplay.textContent = `${temp}°C`;
  }
}
