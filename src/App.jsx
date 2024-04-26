import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import About from "./Componets/About";
import { useState ,useEffect } from "react";
import Loader from "./Componets/Loader";


const App = () => {

const [latitude, setLatitude] = useState(36.191113);
const [longitude, setLongitude] = useState(44.009167);
const [dataHolder,setDataHolder] = useState(null)
const [loader,setLoader] = useState(true);
const handleRetrieveLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        performSearch()
      },
      (error) => {
        console.error("Error getting location:", error.message);
        performSearch()
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};
useEffect(() => {
  handleRetrieveLocation();
}, []);
 


const API_KEY = "a8fdff6a0bd7e8be42152728c29d7136";
const API_URL = "https://api.openweathermap.org";
  const performSearch = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${API_URL}/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setDataHolder(data);
       setTimeout(() => {
         setLoader(false);
       }, 1000);
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoader(false);
    }
  };


  const getData = (type) => {
    if (!dataHolder) return null;
    switch (type) {
      case "today":
        return [dataHolder.current,latitude,longitude];
      case "daily":
        return dataHolder;
      case "forecast":
        return dataHolder.daily.slice(1);
      case "stats":
        return dataHolder.current;
      default:
        return null;
    }
  }




  return (
    <div className="w-full bg-[#222831]">
      <div className="relative max-w-[1200px]   min-h-[100dvh] max-h-fit mx-auto sm:px-3 sm:pt-5 ">
        <Navbar getLocation={handleRetrieveLocation} />
        {loader ? (
          <Loader />
        ) : (
          <>
          <Hero
            today={getData("today")}
            stats={getData("stats")}
            forecast={getData("forecast")}
            today_stats={getData("daily")}
          /> 
           <About /></>
        )}
       
      </div>
    </div>
  );
}
 
export default App;