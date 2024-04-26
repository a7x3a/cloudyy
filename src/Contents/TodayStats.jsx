import logo from "../assets/weather_icons/cloud.png";
import getIcon from "../assets/weather_icons/getIcon";
const TodayStats = ({todayData}) => {
  

  const createTodayAt = ({logo_in, deg, time,index}) => {
    return (
      <div
        key={index}
        className="text-xs h-full p-3  w-full hover:opacity-80  hover:bg-slate-600 transition-all duration-300  bg-[#31363F] font-robo text-white flex flex-col-reverse rounded-xl items-center justify-center"
      >
        <div className="w-full sm:scale-75 flex flex-col items-center justify-center">
          <img
            src={logo_in ? getIcon(logo_in) : logo}
            alt="Type"
            className="w-9"
          />
          <span className="w-full text-center">
            {deg ? deg + "°C" : "14°C"}
          </span>
        </div>
        <div>
          <div className="time sm:scale-80 sm:pt-3">
            {time ? time : "2:00 AM"}
          </div>
        </div>
      </div>
    );
    
  };


const getEightHourlyItems = (hourlyData) => {
  const intervals = [0, 3, 6, 9, 12, 15, 18, 21];
  const eightHourlyItems = intervals.map((hour) => {
    let closestItem = null;
    hourlyData.forEach((item) => {
      const itemHour = new Date(item.dt * 1000).getHours();
      if (
        closestItem === null ||
        Math.abs(itemHour - hour) <
          Math.abs(new Date(closestItem.dt * 1000).getHours() - hour)
      ) {
        closestItem = item;
      }
    });
    return closestItem;
  });
  return eightHourlyItems;
};


  
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${hours}:${formattedMinutes} ${amOrPm}`;
  return formattedTime;
};

  return (
    <div className="relative w-full h-full grid gap-2 sm:grid-cols-8 sm:grid-rows-1 grid-cols-2  items-center">
     
      {todayData &&
        todayData.hourly &&
        getEightHourlyItems(todayData.hourly).map((item, index) =>
          createTodayAt({
            logo_in:
              item.weather && item.weather.length > 0
                ? item.weather[0].main
                : "Unknown",
            deg: Math.floor(item.temp),
            time: formatTime(item.dt),
            index,
          })
        )}
    </div>
  );
};

export default TodayStats;
