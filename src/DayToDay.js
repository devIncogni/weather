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
    this.iconDislay = iconDislay;
    this.conditionDisplay = conditionDisplay;
  }

  setDayName(day) {
    this.dayNameDisplay.textContent = day;
  }

  setdateDisplay(date) {
    this.dateDisplay.textContent = date;
  }

  setMinTemp(minTemp) {
    this.minTempDisplay.textContent = minTemp;
  }

  setMaxTemp(maxTemp) {
    this.maxTempDisplay.textContent = maxTemp;
  }

  setIcon(iconID) {
    this.iconDislay.src = "./clear-day.svg";
  }

  setCondition(condition) {
    this.conditionDisplay = condition;
  }
}
