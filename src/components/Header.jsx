import React from "react";

function Header() {
  return (
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
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-row gap-2 items-center">
          <img src="/svg/user.svg" alt="icon" />
          <span className="font-semibold"> Entrar</span>
        </div>
        <span className="rounded-md font-semibold py-2 px-4 border-[1px] border-[#00FFFF]">
          Criar conta
        </span>
      </div>
    </header>
  );
}

export default Header;
