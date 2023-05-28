import React from "react";
import LoggedHeader from "../components/LoggedHeader";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";

function Lesson() {
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-10">
        <div className="flex gap-2 text-white">
          <Link to="/dashboard">Inicio</Link>
          <span>{">"}</span>
          <Link to="/modulos">Módulos</Link>
          <span>{">"}</span>
          <Link to={`/modulos/Front-end`}>Front-end</Link>
          <span>{">"}</span>
          <Link to={`/modulos/Front-end`}>HTML-Tags-básicas</Link>
          <span>{">"}</span>
          <span>Curso em vídeo: Iniciando em HTML - Conhecendo a linguagem</span>
        </div>
        <div className="flex flex-col gap-10 mt-20">
          <h4 className="text-white text-3xl font-bold">
            Curso em vídeo: Iniciando em HTML - Conhecendo a linguagem
          </h4>
          <div className="flex justify-between items-start gap-10">
            <div className="flex flex-col gap-4 items-center justify-center w-7/12 h-[400px] rounded bg-[#D9D9D9]/10">
              <img alt="play" className="max-w-[64px] cursor-pointer" src="/svg/play.svg"></img>
              <span className="text-white">Vídeo indisponível durante hackathon </span>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-[32px] bg-[#141414] px-[32px] py-[24px] rounded">
                <div className="flex flex-col gap-4 w-full">
                  <h5 className="text-white text-lg font-bold">Aula atual:</h5>
                  <span className="text-white p-4 bg-[#D9D9D9]/10 rounded">
                    2. Iniciando em HTML - Linguagem de marcação de hipertexto
                  </span>
                </div>
                <div className="flex flex-col gap-4 w-full ">
                  <h5 className="text-white text-lg font-bold">Aulas em seguida:</h5>
                  <div className="flex flex-col gap-4 max-h-[150px] overflow-y-scroll">
                    <span className="text-white p-4 bg-[#D9D9D9]/10 rounded">
                      2. Iniciando em HTML - Classes
                    </span>
                    <span className="text-white p-4 bg-[#D9D9D9]/10 rounded">
                      3. Iniciando em HTML - Conhecendo a linguagem
                    </span>
                    <span className="text-white p-4 bg-[#D9D9D9]/10 rounded">
                      4. Iniciando em HTML - Classes
                    </span>
                  </div>
                </div>
              </div>
              <button className="px-10 py-4 text-white bg-[#5301A1] rounded">Próxima aula</button>
              <div className="flex items-center justify-center gap-2 flex-nowrap w-4/12">
                <Avatar id={1} name={"Miro"} />
                <div className="text-white whitespace-nowrap text-sm">
                  <b>Miro</b> e outras <b>100 pessoas</b> se inscreveram neste curso!
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

export default Lesson;
