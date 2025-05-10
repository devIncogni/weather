export default class MoreDetails {
  constructor(
    windSpeedDisplay,
    humidityDisplay,
    pressureDisplay,
    precipitationProbabilityDisplay
  ) {
    this.windSpeedDisplay = windSpeedDisplay;
    this.humidityDisplay = humidityDisplay;
    this.pressureDisplay = pressureDisplay;
    this.precipitationProbabilityDisplay = precipitationProbabilityDisplay;
  }

  setWindSpeed(speed, unitGroup) {
    this.windSpeedDisplay.textContent =
      unitGroup === "metric" ? `${speed}km/h` : `${speed}m/h`;
  }

  setHumidity(humidity) {
    this.humidityDisplay.textContent = `${humidity}%`;
  }

  setPressure(pressure) {
    this.pressureDisplay.textContent = `${pressure}mb`;
  }

  setPrecipitationProbability(precipitationProbability) {
    this.precipitationProbabilityDisplay.textContent = `${precipitationProbability}%`;
  }
}
