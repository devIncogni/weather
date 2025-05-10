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

  setMinTemp(minTemp) {
    this.minTempDisplay.textContent = minTemp;
  }

  setMaxTemp(maxTemp) {
    this.maxTempDisplay.textContent = maxTemp;
  }

  setIcon(iconID) {
    import("./clear-day.svg").then((icon) => {
      this.iconDisplay.src = icon.default;
    });
  }

  setCondition(condition) {
    this.conditionDisplay = condition;
  }
}
