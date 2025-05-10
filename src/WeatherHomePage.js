export default class WeatherHomePage {
  constructor(backgroundImgDisplay, currentLocationDisplay) {
    this.backgroundImgDisplay = backgroundImgDisplay;
    this.currentLocationDisplay = currentLocationDisplay;
  }

  setCurrentLocation(location) {
    this.currentLocationDisplay.textContent = location;
  }
}
