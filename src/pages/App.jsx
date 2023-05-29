import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <div
        className="hidden xl:block min-h-screen bg-left"
        style={{ backgroundImage: "url(/img/bg1.png)" }}
      >
        <Header />
        <div className="flex flex-col justify-start items-start  mt-32 w-full gap-[40px] px-20">
          <h1 className="text-left text-white text-6xl font-bold w-7/12 leading-[56px]">
            Construindo um futuro tecnológico equitativo
          </h1>
          <span className="text-white text-left font-light">
            Explore o universo tecnológico de maneira acessível e transformadora. <br />A plataforma
            completa para impulsionar sua carreira na área de tecnologia.
          </span>
          <Link
            to={"/dashboard"}
            className="bg-[#5301A1] text-white py-4 px-10 rounded-md font-semibold hover:bg-[#5f11a8]"
          >
            Iniciar minha jornada
          </Link>
        </div>
        <Footer />
      </div>
      <div className="flex-col  xl:hidden  w-screen h-screen flex justify-center items-center text-white gap-6">
        <img src="/svg/logo.svg" alt="logo" />
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-lg font-bold text-center text-[#00FFFF]">
            O seu disponível não é compativel
          </h3>
          <span className="text-center opacity-80">
            A primeira versão da Aura suporta apenas dispositivos desktop.
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
