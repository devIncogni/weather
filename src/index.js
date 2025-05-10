/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

// CSS Imports
import "./styles.css";
import "./default-reset.css";
import "./header-style.css";
import "./today-forecast-style.css";
import "./seven-day-forecast-style.css";
// import { format, fromUnixTime } from "date-fns";

// JS Imports
import weatherDomHandler from "./dom-handler";
import locationHandler from "./location-handler";
import unitGrpGetter from "./unit-group";

const unit = unitGrpGetter.getUnit();
let coordinates;

let lastUsedLocation = coordinates;

locationHandler.getGeoLocation().then((coords) => {
  coordinates = coords;
  weatherDomHandler.renderFor(coordinates, unit);
  lastUsedLocation = coordinates;
});

const dialog = document.querySelector("dialog");
const addressClickable = document.querySelector("#location>#address");
const submitLocationButton = document.querySelector("#submit-dialog-form");
const cityInput = document.querySelector("dialog #city");

addressClickable.addEventListener("click", () => {
  dialog.showModal();
});

cityInput.addEventListener(`keydown`, (e) => {
  if (e.key === "Enter") {
    weatherDomHandler.renderFor(cityInput.value, unit);
    lastUsedLocation = cityInput.value;
    dialog.close();
    cityInput.value = "";
  }
});

submitLocationButton.addEventListener(`click`, () => {
  weatherDomHandler.renderFor(cityInput.value, unit);
  lastUsedLocation = cityInput.value;
  dialog.close();
  cityInput.value = "";
});

document.querySelector("#unit-select").addEventListener("click", (e) => {

  switch (e.target.id) {
    case "metric":
      weatherDomHandler.renderFor(lastUsedLocation, "metric");
      break;
    case "us":
      weatherDomHandler.renderFor(lastUsedLocation, "us");
      break;

    default:
      break;
  }
});

// console.log(format(fromUnixTime(1745773200), "iii dd MMM HH:mm"));
