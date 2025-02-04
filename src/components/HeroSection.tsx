import banner from "../assets/banner.png";

const HeroSection = () => {
  return (
    <div className="w-full mt-16 relative z-0">
      <div className="text-xs sm:text-sm p-1 flex justify-center w-full bg-black text-white text-center">
        ENTREGA GRÁTIS PARA ENCOMENDAS SUPERIORES A R$2500,00
      </div>
      <div className="relative w-full h-[300px] sm:h-auto">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-4 sm:bottom-10 w-full flex flex-col items-center text-white text-center">
        <p className=" font-inter mt-4 drop-shadow-md">OUTONO VERÃO</p>
        <h1 className="text-xl tracking-wide md:text-4xl drop-shadow-lg font-raleway">
          SAIBA MAIS
        </h1>
        <div className="flex space-x-4 tracking-wide text-sm">
          <button className="bg-white text-black uppercase py-2 px-2 sm:px-5 mt-2">
            PARA HOMEM
          </button>
          <button className="bg-white text-black uppercase py-2 px-2 sm:px-5 mt-2">
            PARA MULHER
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
