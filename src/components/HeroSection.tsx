import banner from "../assets/banner.png";

const HeroSection = () => {
  return (
    <div className="w-full mt-14 relative z-0">
      <div className="text-sm p-1 flex justify-center w-full bg-black text-white">
        ENTREGA GRÁTIS PARA ENCOMENDAS SUPERIORES A R$2500,00
      </div>
      <img src={banner} alt="Banner" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-10 w-full flex flex-col items-center text-white text-center">
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

export default HeroSection;
