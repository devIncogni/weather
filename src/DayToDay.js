export default class WeekDayToDay {
  constructor(
    dayNameDisplay,
    dateDisplay,
    minTempDisplay,
    maxTempDisplay,
    iconDislay,
    conditionDisplay
  ) {
    this.dayNameDisplay = dayNameDisplay;
    this.dateDisplay = dateDisplay;
    this.minTempDisplay = minTempDisplay;
    this.maxTempDisplay = maxTempDisplay;
    this.iconDisplay = iconDislay;
    this.conditionDisplay = conditionDisplay;
  }

  setDayName(day) {
    this.dayNameDisplay.textContent = day;
  }

  setDateDisplay(date) {
    this.dateDisplay.textContent = date;
  }

  setMinTemp(minTemp, unitGroup) {
    this.minTempDisplay.textContent =
      unitGroup === "metric" ? `${minTemp}°C` : `${minTemp}°F`;
  }

  setMaxTemp(maxTemp, unitGroup) {
    this.maxTempDisplay.textContent =
      unitGroup === "metric" ? `${maxTemp}°C` : `${maxTemp}°F`;
  }

  setIcon(iconID) {
    import(`./weather-icons/${iconID}.svg`).then((icon) => {
      this.iconDisplay.src = icon.default;
    });
  }

  setCondition(condition) {
    this.conditionDisplay.textContent = condition;
  }
}
