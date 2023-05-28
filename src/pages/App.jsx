import Header from "../components/Header";

function App() {
  return (
    <div className="min-h-screen 	" style={{ backgroundImage: "url(/img/bg1.png)" }}>
      <Header />
      <div className="flex flex-col justify-center items-center  mt-20 w-full gap-[40px]">
        <h1 className="text-center text-white text-6xl font-bold flex items-center justify-center w-7/12 leading-[56px]">
          Construindo um futuro tecnológico equitativo
        </h1>
        <span className="text-white text-center font-light">
          Explore o universo tecnológico de maneira acessível e transformadora. <br />A plataforma
          completa para impulsionar sua carreira na área de tecnologia.
        </span>
        <button className="bg-[#5301A1] text-white py-4 px-10 rounded-md font-semibold">
          Iniciar minha jornada
        </button>
      </div>
    </div>
  );
}

export default App;
