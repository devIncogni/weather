// Daily, Hourly, Alerts, Events, Current Data
// Historical station and remote data + Forecast data

// Date Time
// Time Stamp
// Max and Min Temperature
// Temperature
// Feels Like
// Humidity
// Precipitation Probability and Type
// Wind Speed and Direction
// Pressure
// Visibility
// Name
// Address
// Resolved address
// Latitude
// Longitude
// Sunrise
// Sunset
// Conditions
// Description

const key = "RSEN5BMDJKBLYVKZ9SXAY5EV8<>";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cwinddir%2Cpressure%2Cvisibility%2Csunrise%2Csunset%2Cconditions%2Cdescription%2Cicon&include=current%2Calerts%2Cdays%2Chours%2Cevents%2Cobs%2Cremote%2Cfcst&key=${key}&contentType=json`,
      {
        mode: "cors",
        method: "GET",
        headers: {},
      }
    );
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function getProcessedWeatherData(location) {
  const totalWeatherData = await getWeatherData(location);

  try {
    const {
      latitude,
      longitude,
      resolvedAddress,
      description,
      currentConditions,
      alerts,
    } = totalWeatherData;

    const dayData = [];

    for (let index = 0; index < 7; index += 1) {
      const currentDay = totalWeatherData.days[index];
      const { datetimeEpoch, tempmin, tempmax, conditions, icon } = currentDay;
      dayData.push({ datetimeEpoch, tempmin, tempmax, conditions, icon });
    }

    return {
      latitude,
      longitude,
      resolvedAddress,
      description,
      currentConditions,
      alerts,
      dayData,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
