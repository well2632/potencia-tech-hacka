import React from "react";
import LoggedHeader from "../components/LoggedHeader";
import Avatar from "../components/Avatar";
import Slider from "react-slick";

function Dashboard() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div
      className="object-top pb-20 max-w-full bg-contain bg-no-repeat w-screen overflow-x-hidden"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex flex-row justify-between items-center px-20">
        <div className="flex flex-row  justify-start items-center gap-8 mt-10">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="relative">
              <img src="/img/avatarfull.png" alt="avatar user" className="brightness-150" />
              <div className="flex flex-row items-center justify-center gap-4 absolute bottom-0 w-full p-4 bg-[rgba(0,0,0,.5)]">
                <img src="/svg/Behance.svg" alt="behace" />
                <img src="/svg/GitHub.svg" alt="behace" />
                <img src="/svg/Linkedin.svg" alt="behace" />
              </div>
            </div>
            <button className="rounded-md font-semibold py-2 px-12 border-[1px] border-[#00FFFF] text-white">
              Editar
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-white text-4xl font-bold mt-10">
              Bem vindo de
              <br /> volta, Marcos!
            </h2>
            <div>
              <h4 className="text-2xl text-[#00FFFF]">Pontuação: 120XP</h4>
              <span className="text-[#24FFFF] opacity-50">
                Seu lugar no ranking geral é de 392º
              </span>
            </div>
            <span className="text-white opacity-80 text-sm">
              Você está há 12 dias consecutivos acessando a<br /> plataforma, continue assim!
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-20">
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-white font-semibold text-lg">Seus interesses:</span>
            <div className="flex flex-row gap-4">
              <div className="text-white py-2 px-4 bg-[#5301A1] rounded font-semibold text-sm">
                Programação front-end
              </div>
              <div className="text-white py-2 px-4 bg-[#002961] rounded font-semibold text-sm">
                Programação mobile
              </div>
              <div className="text-white py-2 px-4 bg-[#5301A1] rounded font-semibold text-sm">
                Design UX/UI
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-white font-semibold text-lg">Seus amigos:</span>
            <div className="flex flex-row gap-2">
              <Avatar id={1} name={"Tatiana"} />
              <Avatar id={2} name={"Roberto"} />
              <Avatar id={3} name={"Rubens"} />
              <Avatar id={4} name={"Gabriel"} />
              <Avatar id={1} name={"Marcia"} />
              <Avatar id={3} name={"Zeca"} />
              <Avatar id={5} name={"Miro"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 text-2xl mt-24 px-20">
        <h4 className="text-white font-semibold">Continuar estudando</h4>
        <Slider {...settings}>
          <div className=" flex items-center justify-center">
            <div className=" w-10/12 m-auto rounded flex items-center justify-center bg-gray-300 h-[200px]"></div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" w-10/12 m-auto rounded flex items-center justify-center bg-gray-300 h-[200px]"></div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" w-10/12 m-auto rounded flex items-center justify-center bg-gray-300 h-[200px]"></div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" w-10/12 m-auto rounded flex items-center justify-center bg-gray-300 h-[200px]"></div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" w-10/12 m-auto rounded flex items-center justify-center bg-gray-300 h-[200px]"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Dashboard;
