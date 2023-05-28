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
        <img alt="roadmap" src="/svg/roadmap2.svg" className="w-9/12" />
        <div>
          <div className="text-white w-5/12">
            <h4 className="font-bold text-2xl">Progresso</h4>
            <span className="text-white">
              Você aprendeu <b>68%</b> desse conteúdo!
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Roadmap;
