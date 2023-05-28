import React from "react";
import { Link } from "react-router-dom";

function LoggedHeader() {
  return (
    <header className="flex flex-row justify-between items-center text-white px-20 py-4 sticky top-0 bg-[#0B0B0B] z-10">
      <img src="/svg/logo.svg" alt="logo" />
      <nav className="flex-1 flex justify-center items-center">
        <ul className="flex flex-row gap-10 font-medium">
          <li>
            <Link to="/dashboard">Inicio</Link>
          </li>
          <Link to="/modulos">Cursos</Link>
          <li>Ranking</li>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-10">
        <span className="rounded-md font-semibold py-2 px-4 border-[1px] border-[#00FFFF]">
          Meu perfil
        </span>
      </div>
    </header>
  );
}

export default LoggedHeader;
