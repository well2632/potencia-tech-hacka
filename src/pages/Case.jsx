import React, { useEffect } from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import MentoringSchedule from "../components/MentoringSchedule";

function Case() {
  const { Case } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen min-h-full"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-10 h-full">
        <div className="flex gap-2 text-white">
          <Link to="/dashboard">Inicio</Link>
          <span>{">"}</span>
          <Link to="/cases">Cases</Link>
          <span>{">"}</span>
          <span>{Case}</span>
        </div>
        <div className="flex flex-col gap-6 mt-10">
          <h3 className="text-white text-3xl font-bold">Case: {Case}</h3>
          <div className="flex justify-items-center flex-row justify-between gap-10">
            <div
              className="w-5/12 bg-cover block bg-center rounded"
              style={{ backgroundImage: "url(/img/case03.png)" }}
            ></div>
            <div className="flex flex-col gap-2 w-7/12">
              <h5 className="font-bold text-[#00FFFF]">Descrição do projeto</h5>
              <span className="text-white">
                O projeto consiste no desenvolvimento de um sistema de doações online para uma ONG
                específica. O objetivo é criar uma plataforma que permita às pessoas realizar
                doações de forma rápida, conveniente e segura, direcionando seus recursos para uma
                causa de sua escolha. O sistema irá incluir um formulário de doação seguro, onde os
                usuários poderão preencher informações relevantes, como o valor da doação e seus
                dados pessoais. Serão oferecidas opções de pagamento variadas, como cartão de
                crédito, transferência bancária e outras formas eletrônicas de pagamento. O sistema
                de doações online será desenvolvido com foco na segurança e confiabilidade,
                garantindo a proteção dos dados pessoais dos doadores e facilitando a transparência
                nas transações. A interface do usuário será intuitiva e amigável, proporcionando uma
                experiência agradável para os doadores durante todo o processo.
              </span>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Avatar id={1} name={"Maria"} />
                  <span className="text-white font-sm">
                    <b>Maria</b> e outras <b>2 pessoas</b> <br />
                    estão participando
                  </span>
                </div>
                <div className="flex gap-4">
                  <button className="rounded-md font-semibold py-2 px-4 border-[1px] border-[#00FFFF] text-white whitespace-nowrap">
                    Solicitar mentoria{" "}
                  </button>
                  <button className="bg-[#5301A1] py-2 px-4 rounded text-white font-semibold whitespace-nowrap">
                    Quero participar{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 gap-8">
          <h4 className="text-white text-2xl font-bold">Equipe formada</h4>
          <div className="flex justify-between items-start text-white px-10 bg-[#131313] py-6 rounded gap-4">
            <div className="flex flex-col gap-4">
              <span>
                <b>Equipe composta por: Maria</b> e outras <b>2 pessoas</b>
              </span>
              <div className="flex justify-start items-center gap-2">
                <Avatar id={1} name={"Maria"} />
                <Avatar id={2} name={"Rogério"} />
                <Avatar id={3} name={"Anderson"} />
                <div className="rounded-full bg-[#D9D9D9]/10 w-[64px] h-[64px] flex justify-center items-center text-4xl">
                  +
                </div>
                <div className="rounded-full bg-[#D9D9D9]/10 w-[64px] h-[64px] flex justify-center items-center text-4xl">
                  +
                </div>
                <div className="rounded-full bg-[#D9D9D9]/10 w-[64px] h-[64px] flex justify-center items-center text-4xl">
                  +
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end justify-end">
              <div className="flex items-end justify-end gap-2">
                <div className="text-white py-2 px-3 rounded-full bg-[#5301A1] font-semibold text-sm">
                  Back-end
                </div>
                <div className="text-white py-2 px-3 rounded-full bg-[#002961] font-semibold text-sm">
                  Dados
                </div>
              </div>
              <div className="flex items-end justify-end gap-2">
                <div className="text-white py-2 px-3 rounded-full bg-[#0941D0] font-semibold text-sm">
                  Front-end
                </div>
              </div>
              <span className="tex-white">Faltam 8 vagas</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 gap-8">
          <h4 className="text-white text-2xl font-bold">Próximas lives mentoria</h4>
          <div className="flex justify-between items-center gap-10">
            <MentoringSchedule />
            <MentoringSchedule
              name={"Carlos Alberto"}
              position={"CEO da DonateEase"}
              title="Desenvolvimento de sistemas de doações online:  conceito à implementação"
              description="Descubra como funciona o processo de desenvolvimento de um sistema de doações online para uma ONG."
              src={"/img/live02.png"}
              date={"30/05/2023 às 19:30h"}
            />
            <MentoringSchedule
              name={"Marcela Lopes"}
              position={"Voluntária 4Patas"}
              title="Estratégias para maximizar o impacto das suas contribuições"
              description="Impulsione suas próprias iniciativas de arrecadação de fundos e tornar uma diferença significativa nas vidas daqueles que mais precisam."
              src={"/img/live03.png"}
              date={"02/06/2023 às 20h"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Case;
