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

  setWindSpeed(speed) {
    this.windSpeedDisplay.textContent = `${speed}m/s`;
  }

  setHumidity(humidity) {
    this.humidityDisplay.textContent = `${humidity}%`;
  }

  setPressure(pressure) {
    this.pressureDisplay.textContent = `${pressure}bar`;
  }

  setPrecipitationProbability(precipitationProbability) {
    this.precipitationProbabilityDisplay.textContent = `${precipitationProbability}%`;
  }
}
