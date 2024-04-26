import logo from "../assets/weather_icons/clear.png";
import { CustomScroll } from "react-custom-scroll";
import { useEffect, useState } from "react";
import getIcon from "../assets/weather_icons/getIcon";

const Forecast = ({ forecastData }) => {
  const getFormattedDate = (unixTimestamp,type) => {
    if (!unixTimestamp) return "Wednesday, 1 March"; // Default date if timestamp is not available
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createCard = ({ logo_in, deg, date,index }) => {
    return (
      <div
        key={index}
        className="card hover:opacity-80 transition-all  duration-300 hover:bg-slate-600  sm:my-2 my-[6px] flex w-full font-light py-5  px-2 text-white text-pretty  bg-[#31363F] rounded-2xl   justify-around items-center  text-xs"
      >
        <div className="temp relative flex  items-center justify-around ">
          <img
            src={logo_in ? getIcon(logo_in) : logo}
            alt="Type"
            className="w-10"
          />
          <span>{deg ? deg + " °C" : "14°C"}</span>
        </div>
        <div>
          <div className="date">{date ? date : "2 March"}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-full w-full ">
      <h1 className="absolute text-xs rounded-xl z-50  text-black bg-white px-4 py-2 top-[-10px]">
        7 Days Forecast
      </h1>
      <CustomScroll
        heightRelativeToParent={isSmallScreen ? null : "calc(100%)"}
        className="flex sm:h-full  h-fit flex-col w-full"
      >
        {forecastData &&
          forecastData.map((item, index) =>
            createCard({
              logo_in: item.weather[0].main, 
              deg: Math.floor(item.temp.day),
              date: getFormattedDate(item.dt),
              index: index,
            })
          )}
      </CustomScroll>
    </div>
  );
};

export default Forecast;
