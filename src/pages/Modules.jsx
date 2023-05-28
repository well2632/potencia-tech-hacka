import React from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import AreasIcon from "../components/AreasIcon";

function Modules() {
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-20">
        <div className="flex gap-2 text-white">
          <span>Inicio</span>
          <span>{">"}</span>
          <span className="font-bold">Módulos</span>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <div className="relative">
            <input
              className="w-full bg-[#D9D9D9]/10 h-[48px] rounded pl-5 pr-16 text-white"
              placeholder="Buscar curso"
            ></input>
            <img
              src="/svg/search.svg"
              alt="search icon"
              className="absolute right-5 w-[20px] top-1/4"
            />
          </div>
          <button className="flex items-center justify-center w-[48px] h-[48px] rounded bg-[#D9D9D9]/10">
            <img alt="filter icon" src="/svg/Filter.svg" className="w-[20px]" />
          </button>
        </div>
        <div className="flex flex-col gap-6 mt-10">
          <h4 className="text-white text-3xl font-bold">Áreas</h4>
          <div className="flex flex-row gap-8">
            <AreasIcon
              to_path="Front-end"
              image_path={"url(/img/front.png)"}
              id={"front"}
              course="Front-end"
            />
            <AreasIcon
              to_path="Back-end"
              image_path={"url(/img/back.png)"}
              id={"back"}
              course="Back-end"
            />
            <AreasIcon id={"design"} course="UX/UI Design" />
            <AreasIcon id={"data"} course="Data" />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-20">
          <h4 className="text-white text-3xl font-bold">Módulos</h4>
          <div className="flex flex-row justify-between  gap-4">
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
          </div>
          <div className="flex flex-row justify-between  gap-4">
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
          </div>
          <span className="w-full px-2 text-end font-semibold text-white cursor-pointer">
            Ver mais
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-20">
          <h4 className="text-white text-3xl font-bold">Módulos favoritados 💜</h4>
          <div className="flex flex-row justify-between  gap-4">
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
          </div>
          <div className="flex flex-row justify-between  gap-4">
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
          </div>
          <span className="w-full px-2 text-end font-semibold text-white cursor-pointer">
            Ver mais
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-20">
          <h4 className="text-white text-3xl font-bold">Módulos concluídos</h4>
          <div className="flex flex-row justify-between  gap-4">
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
          </div>

          <span className="w-full px-2 text-end font-semibold text-white cursor-pointer">
            Ver mais
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-20">
          <h4 className="text-white text-3xl font-bold">Leituras</h4>
          <div className="flex flex-row justify-between  gap-4">
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
            <div className="bg-[#D9D9D9]/20 w-full h-[120px] rounded"></div>
          </div>

          <span className="w-full px-2 text-end font-semibold text-white cursor-pointer">
            Ver mais
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Modules;
