function App() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: "/img/bg1.png" }}>
      <header className="flex flex-row justify-between items-center text-white px-20 py-4">
        <img src="/svg/logo.svg" />
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
      <h1 className="mt-10 text-white text-4xl font-bold flex items-center justify-center">
        Construindo um futuro tecnológico equitativo
      </h1>
    </div>
  );
}

export default App;
