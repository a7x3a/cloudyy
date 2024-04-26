export { default as clearIcon } from "./clear.png";
export { default as cloudIcon } from "./cloud.png";
export { default as drizzleIcon } from "./drizzle.png";
export { default as snowIcon } from "./snow.png";
export { default as rainIcon } from "./rain.png";
export { default as ashIcon } from "./ash.png";
export { default as dustIcon } from "./dust.png";
export { default as fogIcon } from "./fog.png";
export { default as hazeIcon } from "./haze.png";
export { default as mistIcon } from "./mist.png";
export { default as sandIcon } from "./sand.png";
export { default as squallIcon } from "./squall.png";
export { default as stormIcon } from "./storm.png";
export { default as tornadoIcon } from "./tornado.png";
export { default as humidityIcon } from "./humidity.png";
export { default as pressureIcon } from "./pressure.png";
export { default as sunriseIcon } from "./sunrise.png";
export { default as sunsetIcon } from "./sunset.png";
export { default as temperatureIcon } from "./temperature.png";
export { default as visibilityIcon } from "./visibility.png";
export { default as logo } from "./logo.png";

import {
  clearIcon,
  cloudIcon,
  drizzleIcon,
  snowIcon,
  rainIcon,
  ashIcon,
  dustIcon,
  fogIcon,
  hazeIcon,
  mistIcon,
  sandIcon,
  squallIcon,
  stormIcon,
  tornadoIcon,
  humidityIcon,
  pressureIcon,
  sunriseIcon,
  sunsetIcon,
  temperatureIcon,
  visibilityIcon,
  logo,
} from "../weather_icons/getIcon";

const getIcon = (type) => {
  switch (type) {
    case "Clear":
      return clearIcon;
    case "Clouds":
      return cloudIcon;
    case "Drizzle":
      return drizzleIcon;
    case "Snow":
      return snowIcon;
    case "Rain":
      return rainIcon;
    case "Ash":
      return ashIcon;
    case "Dust":
      return dustIcon;
    case "Fog":
      return fogIcon;
    case "Haze":
      return hazeIcon;
    case "Mist":
      return mistIcon;
    case "Sand":
      return sandIcon;
    case "Squall":
      return squallIcon;
    case "Storm":
      return stormIcon;
    case "Tornado":
      return tornadoIcon;
    case "humidity":
      return humidityIcon;
    case "pressure":
      return pressureIcon;
    case "sunrise":
      return sunriseIcon;
    case "sunset":
      return sunsetIcon;
    case "temperature":
      return temperatureIcon;
    case "visibility":
      return visibilityIcon;
    case "logo":
      return logo;
    default:
      console.warn(`Unknown weather type: ${type}`);
      return clearIcon;
  }
};

export default getIcon;
