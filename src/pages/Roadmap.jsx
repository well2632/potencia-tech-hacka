import React from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import { Link } from "react-router-dom";

function Roadmap() {
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-10 flex flex-col items-start justify-between">
        <div className="flex gap-2 text-white">
          <Link to="/dashboard">Inicio</Link>
          <span>{">"}</span>
          <Link to="/modulos">Módulos</Link>
          <span>{">"}</span>
          <Link to={`/modulos/Front-end`}>Front-end</Link>
          <span>{">"}</span>
          <span>Roadmap</span>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6 mt-10">
            <h4 className="text-white text-3xl font-bold">Roadmap</h4>
            <span className="text-white">
              Desvende o caminho para se tornar um(a) especialista em Front-End! Navegue pelo nosso
              roadmap exclusivo e descubra exatamente por onde começar sua jornada na área. Nosso
              site de educação em tecnologia oferece um guia completo, passo a passo, para
              ajudá-lo(a) a adquirir as habilidades essenciais do Front-End de maneira organizada e
              eficiente.
            </span>
          </div>
          <div className="flex">
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
                  <div className="w-[24px] h-[24px] rounded bg-[#777777]"></div>
                  <span className="text-white ">É bom aprender!</span>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[24px] h-[24px] rounded bg-[#0941D0]"></div>
                  <span className="text-white ">Escolha uma opção!</span>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[24px] h-[24px] rounded bg-[#FFF]"></div>
                  <span className="text-white ">Opcional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Roadmap;
