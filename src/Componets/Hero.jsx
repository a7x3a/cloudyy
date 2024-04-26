import Card from '../Componets/Card'
import Forecast from '../Contents/Forecasts';
import Statistcis from '../Contents/Statistics';
import Today from '../Contents/Today'; 
import TodayStats from '../Contents/TodayStats';


//reciving Data from Data.js using switch case to format data
const Hero = ({today,stats,forecast,today_stats}) => {

    return (
      <div className="grid  grid-cols-8  sm:py-0  grid-rows-4 gap-10 sm:gap-4 mb-6 sm:max-w-[1200px] h-fit mx-5 sm:h-[66dvh]   ">
        <Card
          smColSpan={"sm:col-span-2"}
          smRowSpan={"sm:row-span-4"}
          colSpan={"col-span-8"}
          rowSpan={"row-span-4 p-7 !rounded-3xl   sm:my-4 my-4  sm:p-0"}
          content={
            <Today
              temp={today ? today[0].temp : "14C"}
              wh_type={today ? today[0].weather[0].main : "rain"}
              date={today ? today[0].dt : "12 12 2024"}
              lat = {today && today[1] }
              lang = {today && today[2]}
            />
          }
        />

        <Card
          smColSpan={"sm:col-span-4"}
          smRowSpan={"sm:row-span-3"}
          colSpan={"col-span-8"}
          rowSpan={"row-span-4  bg-transparent sm:my-4 "}
          content={
            <Statistcis
              pressure={stats ? stats.pressure : "1110hPa"}
              humidity={stats ? stats.humidity : "58%"}
              visibility={stats ? stats.visibility/1000+" km" : "3.2 KM"}
              feels_like={stats ? stats.feels_like : "17 C"}
              sunrise={stats ? stats.sunrise : "5:00 AM"}
              sunset={stats ? stats.sunset : "7:00 PM"}
            />
          }
        />

        <Card
          smColSpan={"sm:col-span-2"}
          smRowSpan={"sm:row-span-3"}
          colSpan={"col-span-8"}
          rowSpan={
            "row-span-4  sm:my-4 p-2 sm:h-full h-[29dvh]  sm:p-0 bg-transparent"
          }
          content={<Forecast forecastData={forecast ? forecast : null} />}
        />
        <Card
          smColSpan={"sm:col-span-6"}
          smRowSpan={"sm:row-span-1"}
          colSpan={"col-span-8"}
          rowSpan={"row-span-4 bg-transparent px-2 py-2 sm:my-4 sm:p-0"}
          content={<TodayStats todayData={today_stats ? today_stats : null} />}
        />
      </div>
    );
}
 
export default Hero;