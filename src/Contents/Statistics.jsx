import getIcon from "../assets/weather_icons/getIcon";
const createStatsCard = (title,icon,deg)=>{
  return (
    <div className="relative hover:opacity-80 w-full h-full hover:bg-slate-600 transition-all duration-300 bg-[#31363F] font-robo sm:w-full sm:h-full rounded-3xl flex  px-5 sm:p-0 p-20 flex-col justify-center    items-center ">
      <div className="title  px-2 py-1  text-center  text-[0.9em] font-light bg-white text-black absolute top-[-6px] w-2/3  text-xs min-w-fit rounded-xl ">
        <h1>{title ? title : "Pressure"}</h1>
      </div>
      <div className="body flex  flex-col  justify-center items-center w-full ">
        <img className="w-8 m-3" src={icon ? icon : getIcon("Dust")}></img>
        <span className="font-bold md:text-xl tracking-widest mt-[-7px]">
          {deg ? deg : "Null"}
        </span>
      </div>
    </div>
  );
}
const Statistcis = ({pressure,humidity,visibility,feels_like,sunrise,sunset}) => {

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
    <div className="w-full h-full grid  sm:grid-cols-3 sm:grid-rows-2 gap-3 grid-rows-3   text-white font-bold grid-cols-2">
      {createStatsCard(null, null, pressure + "hPa")}
      {createStatsCard("Humidity", getIcon("humidity"), humidity + "%")}
      {createStatsCard("Visibility", getIcon("visibility"), visibility)}
      {createStatsCard(
        "Feels Like",
        getIcon("temperature"),
        Math.floor(feels_like) + "°C"
      )}
      {createStatsCard("Sunrise", getIcon("sunrise"), formatTime(sunrise))}
      {createStatsCard("Sunset", getIcon("sunset"), formatTime(sunset))}
    </div>
  );
};

export default Statistcis;
