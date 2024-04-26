import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="text-white p-5 w-full sm:h-[50px] h-fit sm:rounded-full  bg-[#31363F]  flex justify-around items-center sm:flex-row  flex-col-reverse font-robo text-center text-xs ">
      <a
        href="https://openweathermap.org/"
        target="_blank"
        className="opacity-20  hover:opacity-90 cursor-pointer transition-all p-4 duration-300"
      >
        Powered By OpenWheather
      </a>
      <div className="flex sm:gap-3 flex-row  items-center gap-4 sm:p-0 p-5">
        <a
          href="https://github.com/a7x3a"
          target="_blank"
          className="opacity-25 hover:opacity-90 transition-all duration-300"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://a7x3a.github.io"
          target="_blank"
          className="opacity-25  capitalize font-robo tracking-widest font-bold hover:opacity-90 transition-all duration-300 flex gap-3 justify-center items-center  text-xs"
        >
          @Ahmad Omar
        </a>
      </div>
    </div>
  );
};

export default About;
