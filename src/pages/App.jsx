function App() {
  return (
    <div className="min-h-screen 	" style={{ backgroundImage: "url(/img/bg1.png)" }}>
      <header className="flex flex-row justify-between items-center text-white px-20 py-4">
        <img src="/svg/logo.svg" alt="logo" />
        <nav className="flex-1 flex justify-center items-center">
          <ul className="flex flex-row gap-10 font-medium">
            <li>Inicio</li>
            <li>A Aura</li>
            <li>Cursos</li>
            <li>Cases</li>
            <li>Ranking</li>
            <li>Comunidade</li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-6">
          <span className="font-semibold">Entrar</span>
          <span className="rounded-md font-semibold py-2 px-4 border-[1px] border-[#00FFFF]">
            Criar conta
          </span>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center  mt-20 w-full gap-[40px]">
        <h1 className="text-center text-white text-5xl font-bold flex items-center justify-center w-7/12 leading-[56px]">
          Construindo um futuro tecnológico equitativo
        </h1>
        <span className="text-white text-center font-light">
          Explore o universo tecnológico de maneira acessível e transformadora. <br />A plataforma
          completa para impulsionar sua carreira na área de tecnologia.
        </span>
        <button>Iniciar minha jornada</button>
      </div>
    </div>
  );
}

export default App;
