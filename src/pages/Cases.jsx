import React from "react";
import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import Slider from "react-slick";
import CaseBanner from "../components/CaseBanner";
import Avatar from "../components/Avatar";

function Cases() {
  const settinsCases = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div
      className="flex flex-col  max-w-full bg-contain bg-no-repeat w-screen"
      style={{ backgroundImage: "url(/img/smoke.png)" }}
    >
      <LoggedHeader />
      <div className="flex-1 w-full px-20 mt-20">
        <div className="flex gap-2 text-white">
          <span>Inicio</span>
          <span>{">"}</span>
          <span className="font-bold">Cases</span>
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
        <div className="flex flex-col gap-10 mt-10">
          <h4 className="text-white text-3xl font-bold">Cases</h4>
          <Slider {...settinsCases}>
            <CaseBanner
              img_url={"/img/case01.png"}
              title="Criação de um sistema de gerenciamento de eventos"
              description="Desenvolva desde o
                  cadastro de eventos até a venda de ingressos online."
            />
            <CaseBanner
              img_url={"/img/case02.png"}
              title="Implementação de um sistema de monitoramento de saúde"
              description="Crie um sistema que permita aos usuários monitorarem sua saúde"
            />
            <CaseBanner
              img_url={"/img/case02.png"}
              title="Implementação de um sistema de monitoramento de saúde"
              description="Crie um sistema que permita aos usuários monitorarem sua saúde"
            />
          </Slider>
        </div>
        <section className="flex flex-col gap-10 mt-32">
          <h4 className="text-white text-3xl font-bold">Cases recomendados para a sua posição</h4>
          <div className="flex items-center justify-between flex-nowrap gap-10">
            <div className="flex flex-row w-8/12 gap-6">
              <img src="/img/case05.png" alt="Imagem case Market Web" />
              <div className="flex flex-col justify-center gap-2">
                <h5 className="font-bold text-2xl text-white">Case: Market Web</h5>
                <span className="text-white/70 text-sm">
                  Crie um website de comércio eletrônico completo, incluindo uma interface de
                  usuário atraente, sistema de gerenciamento de produtos, carrinho de compras,
                  integração de pagamento seguro e opções de envio.
                </span>
                <div className="flex justify-between">
                  <span className="text-[#00FFFF] font-bold text-xl">+100XP</span>
                  <span className="text-white font-bold">Acaba em 2 dias</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 flex-nowrap w-4/12">
              <Avatar id={5} name={"Miro"} />
              <div className="text-white whitespace-nowrap text-sm">
                <b>Miro</b> e outras <b>100 pessoas</b> estão participando
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-nowrap gap-10">
            <div className="flex flex-row w-8/12 gap-6">
              <img src="/img/case06.png" alt="Imagem case Gerenciador de tarefas" />
              <div className="flex flex-col justify-center gap-2">
                <h5 className="font-bold text-2xl text-white">Case: Gerenciador de tarefas</h5>
                <span className="text-white/70 text-sm">
                  Crie um aplicativo intuitivo e eficiente para ajudar as pessoas a organizarem suas
                  tarefas diárias. O aplicativo deve permitir adicionar, editar e marcar tarefas
                  como concluídas, além de oferecer recursos de lembretes e prioridades.
                </span>
                <div className="flex justify-between">
                  <span className="text-[#00FFFF] font-bold text-xl">+100XP</span>
                  <span className="text-white font-bold">Acaba em 2 dias</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 flex-nowrap w-4/12">
              <Avatar id={5} name={"Miro"} />
              <div className="text-white whitespace-nowrap text-sm">
                <b>Miro</b> e outras <b>100 pessoas</b> estão participando
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 mt-32">
          <h4 className="text-white text-3xl font-bold">Cases abertos recentemente</h4>
          <div className="flex items-center justify-between flex-nowrap gap-10">
            <div className="flex flex-row w-8/12 gap-6">
              <img src="/img/case03.png" alt="Imagem case donate" />
              <div className="flex flex-col justify-center gap-2">
                <h5 className="font-bold text-2xl text-white">Case: DonateEase</h5>
                <span className="text-white/70 text-sm">
                  Crie um sistema que permita às pessoas fazerem doações online. O sistema deve
                  incluir um formulário de doação seguro, opções de pagamento variadas e recursos de
                  rastreamento para acompanhar o progresso das doações.
                </span>
                <div className="flex justify-between">
                  <span className="text-[#00FFFF] font-bold text-xl">+100XP</span>
                  <span className="text-white font-bold">Acaba em 2 dias</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 flex-nowrap w-4/12">
              <Avatar id={5} name={"Miro"} />
              <div className="text-white whitespace-nowrap text-sm">
                <b>Miro</b> e outras <b>100 pessoas</b> estão participando
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-nowrap gap-10">
            <div className="flex flex-row w-8/12 gap-6">
              <img src="/img/case04.png" alt="Imagem case Impact Hub" />
              <div className="flex flex-col justify-center gap-2">
                <h5 className="font-bold text-2xl text-white">Case: Impact Hub</h5>
                <span className="text-white/70 text-sm">
                  Crie um website envolvente e informativo para uma ONG, destacando suas causas
                  sociais e projetos. O website deve incluir seções para apresentar histórias de
                  sucesso, informações sobre voluntariado, depoimentos e formas de contato.
                </span>
                <div className="flex justify-between">
                  <span className="text-[#00FFFF] font-bold text-xl">+100XP</span>
                  <span className="text-white font-bold">Acaba em 2 dias</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 flex-nowrap w-4/12">
              <Avatar id={5} name={"Miro"} />
              <div className="text-white whitespace-nowrap text-sm">
                <b>Miro</b> e outras <b>100 pessoas</b> estão participando
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Cases;
