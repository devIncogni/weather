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

const locationHandler = (() => {
  const getGeoLocation = async () => {
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
  };

  const getFormInputLocation = () => document.querySelector("dialog #city").value;

  return { getGeoLocation, getFormInputLocation };
})();

export default locationHandler;
