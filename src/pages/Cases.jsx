import React from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Cases() {
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
          <span className="font-bold">Cases</span>
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
          <h4 className="text-white text-3xl font-bold">Cases</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cases;
