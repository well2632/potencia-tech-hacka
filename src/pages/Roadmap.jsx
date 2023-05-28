import React from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";

function Roadmap() {
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-10 flex flex-row items-start justify-between">
        <img alt="roadmap" src="/svg/roadmap2.svg" className="w-8/12" />
        <div className="flex flex-col gap-10">
          <div className="text-white w-full">
            <h4 className="font-bold text-xl">Progresso</h4>
            <span className="text-white">
              Você aprendeu <b>68%</b> desse conteúdo!
            </span>
          </div>
          <div className="flex flex-col text-white w-full p-4 bg-[#1F1F1F]/60 rounded gap-4">
            <h4 className="font-bold text-xl">Legenda:</h4>
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-[24px] h-[24px] rounded bg-[#5301A1]"></div>
              <span className="text-white ">Necessário aprender!</span>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-[24px] h-[24px] rounded bg-[#5301A1]"></div>
              <span className="text-white ">É bom aprender!</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Roadmap;
