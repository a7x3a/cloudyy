import logo from '../assets/weather_icons/rain.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import getIcon from '../assets/weather_icons/getIcon';
import { useState,useEffect } from 'react';

const Today = ({
  temp = "14°C",
  wh_type = "Rain",
  date = "Wednesday, 1 March",
  lat ,
  lang ,
}) => {



const [city, setCity] = useState(""); // Initialize city state

useEffect(() => {
  const fetchLocationCity = async () => {
    try {
      const city = await getLocationCity(lat, lang);
      setCity(city);
    } catch (error) {
      console.error("Error fetching location city:", error);
    }
  };

  fetchLocationCity(); // Call the asynchronous function
}, []); 




  const getFormattedDate = (unixTimestamp) => {
    if (!unixTimestamp) return "Wednesday, 1 March"; // Default date if timestamp is not available
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

const getLocationCity = async (latitude, longitude) => {
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    const data = await response.json();
    if (data.address && data.address.city) {
      return data.address.city;
    } else {
      return "Unknown City";
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
    return "Unknown City";
  }
};



  return (
    <div className="grid sm:hover:opacity-80 transition-all duration-300  sm:hover:bg-slate-600 rounded-3xl grid-cols-1 grid-rows-1 h-full w-full font-robo font-bold text-white">
      <div className="relative w-full  h-full rounded-3xl flex flex-col justify-around gap-2 p-10 ">
        <span>Now</span>
        <div className="flex items-center  justify-center  flex-col  ">
          <div className="deg w-full   font-semibold text-left ">
            <span className="md:text-5xl min-sm:text-6xl max-sm:text-6xl xl:text-6xl">
              {temp ? Math.floor(temp) + " °C" : "14°C"}
            </span>
          </div>
          <img
            src={wh_type ? getIcon(wh_type) : logo}
            className="sm:w-[4em] w-fit rounded-full"
            alt="Sun"
          />
        </div>

        <span className="status pb-2 text-xl text-center uppercase tracking-widest font-robo font-semibold">
          {wh_type}
        </span>
        <hr className="opacity-25" />

        <div className="date pt-10 sm:pt-4 font-robo sm:text-xs w-fit capitalize  text-wrap  font-light tracking-widest sm:justify-start justify-start   flex gap-1   items-center   ">
          <FaCalendar size={25} className="p-1" />
          <h1>{date ? getFormattedDate(date) : "Wensday , 1 March"}</h1>
        </div>

        <div className="location flex gap-0 font-robo  w-fit sm:text-xs text-wrap capitalize font-light  text-xl sm:justify-start  justify-center items-center  text-white ">
          <FaLocationDot size={25} className="p-1" />
          <h1>
            {lat && lang && city}
          </h1>
        </div>
      </div>
    </div>
  );
};
 
export default Today;