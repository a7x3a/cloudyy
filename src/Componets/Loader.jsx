import { bouncy } from 'ldrs'
bouncy.register()


const Loader = () => {
    return (
      <div className=" w-full h-[100dvh] sm:h-[70dvh]  rounded-full transition-all duration-700 flex justify-center items-center">
        <l-bouncy size="80" speed="1.75" color="white"></l-bouncy>
      </div>
    );
}
 
export default Loader;