import React from "react";

function LoggedHeader() {
  return (
    <header className="flex flex-row justify-between items-center text-white px-20 py-4">
      <img src="/svg/logo.svg" alt="logo" />
      <nav className="flex-1 flex justify-center items-center"></nav>
      <div className="flex justify-center items-center gap-10">
        <span className="rounded-md font-semibold py-2 px-4 border-[1px] border-[#00FFFF]">
          Meu perfil
        </span>
      </div>
    </header>
  );
}

export default LoggedHeader;
