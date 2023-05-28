import React from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Course() {
  const { module, course } = useParams();
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-20">
        <div className="flex gap-2 text-white">
          <Link to="/dashboard">Inicio</Link>
          <span>{">"}</span>
          <Link to="/modulos">Módulos</Link>
          <span>{">"}</span>
          <Link to={`/modulos/${module}`}>{module}</Link>
          <span>{">"}</span>
          <span className="font-bold">{course}</span>
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
          <h4 className="text-white text-3xl font-bold">{course}</h4>
          <span className="text-white">
            Descubra o fascinante mundo do Front-End: torne-se um mestre da criação visual e
            interativa na web! Aprenda as habilidades essenciais para projetar e desenvolver
            interfaces incríveis, combinando arte e tecnologia. Na Aura, você encontrará cursos
            abrangentes, tutoriais passo a passo e recursos atualizados, tudo projetado para
            impulsionar sua carreira no campo do Front-End. Prepare-se para explorar conceitos de
            HTML, CSS, JavaScript e muito mais, enquanto mergulha na arte de construir experiências
            online envolventes e responsivas.
          </span>
        </div>
        <div className="flex justify-end items-end w-full mt-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <button className="bg-[#5301A1] py-4 px-6 rounded text-white font-semibold">
              Roadmap {module}
            </button>
            <span className="text-white text-center text-sm">
              <b>Iniciante?</b> Acesse o roadmap <br />e saiba por onde começar!
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-20">
          <h4 className="text-white text-3xl font-bold">Cursos em vídeo</h4>
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
          <h4 className="text-white text-3xl font-bold">Leituras</h4>
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
          <h4 className="text-white text-3xl font-bold">Exercícios</h4>
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
      </div>
      <Footer />
    </div>
  );
}

export default Course;
