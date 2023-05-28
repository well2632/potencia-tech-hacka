import React from "react";
import LoggedHeader from "../components/LoggedHeader";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import RankingRow from "../components/RankingRow";

function Ranking() {
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-20">
        <Breadcrumb items={["Ranking"]} />
        <div className="flex items-center justify-end w-full gap-2">
          <div className="relative">
            <input
              className="w-full bg-[#D9D9D9]/10 h-[48px] rounded pl-5 pr-16 text-white"
              placeholder="Buscar no ranking..."
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
        <div className="flex flex-col gap-2 mt-10">
          <h4 className="text-white text-3xl font-bold">Ranking</h4>
          <div className="flex items-center justify-start gap-2 font-bold text-lg">
            <span className="text-white">Sua posição no ranking:</span>
            <span className="text-[#00FFFF]">8º</span>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <img src="/svg/places.svg" alt="ranking top 3" className="w-[60%]" />
          <div className="flex justify-center items-start w-full gap-8 mt-20">
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-white font-bold text-xl">Top mensal:</h4>
              <div className="flex flex-col gap-4">
                <RankingRow position={1} />
                <RankingRow position={2} />
                <RankingRow position={3} />
                <RankingRow position={4} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-white font-bold text-xl">Top anual:</h4>
              <div className="flex flex-col gap-4">
                <RankingRow position={1} />
                <RankingRow position={2} />
                <RankingRow position={3} />
                <RankingRow position={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ranking;
