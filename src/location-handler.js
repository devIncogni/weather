async function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

const locationHandler = (async () => {
  async function getGeoLocation() {
    let currentLocation = "";
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      try {
        const { latitude, longitude } = await getLocation();
        currentLocation = `${latitude}%2C${longitude}`;
      } catch (error) {
        console.error("Error getting location:", error);
        currentLocation = "Lucknow";
      }
    }
    return currentLocation;
  }

  let currentLocation = await getGeoLocation();

  const dialog = document.querySelector("dialog");
  const addressClickable = document.querySelector("#location>#address");
  const cityInput = document.querySelector("dialog #city");
  const submitLocationButton = document.querySelector("#submit-dialog-form");

  addressClickable.addEventListener("click", () => {
    dialog.showModal();
  });

  cityInput.addEventListener(`keydown`, (e) => {
    if (e.key === "Enter") {
      currentLocation = cityInput.value;
      dialog.close();
      cityInput.value = "";
    }
  });

  submitLocationButton.addEventListener(`click`, () => {
    currentLocation = cityInput.value || currentLocation;
    dialog.close();
    cityInput.value = "";
  });

  return { currentLocation, getGeoLocation };
})();

export default locationHandler;
