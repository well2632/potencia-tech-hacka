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
        <div className="flex flex-col gap-10 mt-14">
          <h4 className="text-white text-3xl font-bold">
            Curso em vídeo: Iniciando em HTML - Conhecendo a linguagem
          </h4>
          <div className="flex justify-between items-start gap-10">
            <div className="flex flex-col items-center justify-center w-7/12">
              <div className="flex flex-col w-full gap-4 items-center justify-center  h-[400px] rounded bg-[#D9D9D9]/10">
                <img alt="play" className="max-w-[64px] cursor-pointer" src="/svg/play.svg"></img>
                <span className="text-white">Vídeo indisponível durante hackathon </span>
              </div>
              <div className="flex justify-between items-center gap-2 text-white mt-4">
                <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#474747]/20 rounded-full">
                  <img alt="star icon" src="/svg/star.svg" />
                  <span className="font-semibold text-sm">Avaliar aula</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#474747]/20 rounded-full">
                  <img alt="notes icon" src="/svg/Notes.svg" />
                  <span className="font-semibold text-sm">Anotações</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#474747]/20 rounded-full">
                  <img alt="edit text icon" src="/svg/EditText.svg" />
                  <span className="font-semibold text-sm">Transcrição do vídeo</span>
                </div>{" "}
                <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#474747]/20 rounded-full">
                  <img alt="pdf icon" src="/svg/PDF.svg" />
                  <span className="font-semibold text-sm">PDF da Aula</span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start w-full gap-4 text-white mt-12">
                <h5 className="text-white text-xl font-bold">Dúvidas? Escreva uma mensagem!</h5>
                <textarea
                  style={{ resize: "none" }}
                  className="rounded w-full bg-[#D9D9D9]/10 p-2"
                ></textarea>
                <div className="flex justify-between items-center w-full">
                  <img src="/svg/Attach.svg" alt="Attach icon" className="w-[32px]" />
                  <div className="flex flex-row items-center gap-4 justify-end w-full">
                    <button className="bg-[#666666]/20 text-white px-6 py-3 rounded font-semibold">
                      Limpar
                    </button>
                    <button className="bg-[#5301A1] text-white px-6 py-3 rounded font-semibold">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
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
              <button className="px-10 py-4 text-white bg-[#5301A1] rounded font-semibold">
                Próxima aula
              </button>
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
