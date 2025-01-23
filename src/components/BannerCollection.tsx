import banner2 from "../assets/banner2.png";

const BannerCollection = () => {
  return (
    <div className="w-full mt-14 relative z-0">
      <img src={banner2} alt="Banner" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute bottom-10 w-full flex flex-col items-center text-white text-center z-20">
        <p className="font-inter mt-4 drop-shadow-md">SPRING SUMMER</p>
        <h1 className="text-xl tracking-wide md:text-4xl drop-shadow-lg font-raleway">
          TELL ME MORE
        </h1>
        <div className="flex space-x-4 tracking-wide text-sm">
          <button className="bg-white text-black uppercase py-2 px-5 mt-2">
            SHOP MEN
          </button>
          <button className="bg-white text-black uppercase py-2 px-5 mt-2">
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCollection;
