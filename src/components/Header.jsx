import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center text-white px-20 py-4">
      <img src="/svg/logo.svg" alt="logo" />

      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-row gap-2 items-center">
          <img src="/svg/user.svg" alt="icon" />
          <Link to="/dashboard" className="font-semibold">
            Entrar
          </Link>
        </div>
        <Link
          to="/dashboard"
          className="rounded-md font-semibold py-2 px-4 border-[1px] border-[#00FFFF]"
        >
          Criar conta
        </Link>
      </div>
    </header>
  );
}

export default Header;
