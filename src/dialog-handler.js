const dialogHandler = (async () => {
  let currentLocation = "";

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

  const dialog = document.querySelector("dialog");
  const addressClickable = document.querySelector("#location>#address");

  addressClickable.addEventListener("click", () => {
    dialog.showModal();
  });

  const cityInput = document.querySelector("dialog #city");
  cityInput.addEventListener(`keydown`, (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      currentLocation = cityInput.value;
      dialog.close();
      cityInput.value = "";
    }
  });

  console.log(currentLocation);

  return { currentLocation };
})();

export default dialogHandler;
