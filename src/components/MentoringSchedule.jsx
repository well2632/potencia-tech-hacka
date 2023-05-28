import React from "react";

function MentoringSchedule({ src, name, position, title, description, date }) {
  return (
    <div className="flex justify-center items-start gap-4 p-4 bg-[#131313] h-[230px] w-full">
      <div className="flex flex-col gap-4 items-center w-[40%] h-full">
        <img src={`${src ? src : "/img/live01.png"}`} alt="live 01" className="w-full " />
        <span className="text-white text-center text-xs whitespace-nowrap ">
          <b>{name || "Luciana Sponzgeir"}</b>
          <br />
          {position || "CEO da RedeBrasil"}
        </span>
      </div>
      <div className="flex flex-col justify-between items-center w-full gap-2 h-full">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#00FFFF] font-bold  leading-5">
            {title || '"Estratégias eficazes para impulsionar doações online"'}
          </span>
          <span className="text-white text-xs">
            {description ||
              '"Descubra estratégias e insights práticos para desenvolver um sistema de doações online eficiente, garantindo que sua ONG possa alcançar seu objetivo de arrecadação de fundos."'}
          </span>
        </div>

        {!date && (
          <div className="flex justify-between items-center w-full">
            <span className="uppercase text-white text-xs font-bold px-4 py-2 rounded bg-[#ED4242]">
              Ao vivo
            </span>
            <span className=" text-white text-xs font-bold"> 72 assistindo</span>
          </div>
        )}
        {date && (
          <div className="flex w-full gap-2 font-bold text-sm text-white">
            <span className="text-[#00FFFF]">Data:</span>
            <span>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MentoringSchedule;
