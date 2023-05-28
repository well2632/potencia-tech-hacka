import React from "react";

function Footer() {
  return (
    <footer className="flex flex-row items-start justify-between pl-20 pr-48 pt-10 pb-20 mt-24 bg-[#0F0F0F] border-t-[.6px] border-white/20 w-full">
      <div className="flex flex-col items-start justify-start gap-5">
        <img src="/svg/logo-min.svg" alt="logo min" />
        <div className="flex flex-row gap-3 items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-white/5 from-20% to-white/10 w-[40px] h-[40px]">
            <img src="/svg/FacebookFooter.svg" alt="icon facebook" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-white/5 from-20% to-white/10 w-[40px] h-[40px]">
            <img src="/svg/LinkedinFooter.svg" alt="icon linkedin" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-white/5 from-20% to-white/10 w-[40px] h-[40px]">
            <img src="/svg/InstagramFooter.svg" alt="icon linkedin" />
          </div>{" "}
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-white/5 from-20% to-white/10 w-[40px] h-[40px]">
            <img src="/svg/TwitterFooter.svg" alt="icon linkedin" />
          </div>
        </div>
        <span className="text-white/40 text-sm">
          Copyright © 2023 | Todos os direitos reservados.
        </span>
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold">INSTITUCIONAL</h4>
          <span className="text-white/50">Sobre nós</span>
          <span className="text-white/50">Trabalhe conosco</span>
          <span className="text-white/50">Parceiros</span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold">SUPORTE</h4>
          <span className="text-white/50">FAQ</span>
          <span className="text-white/50">Fale conosco</span>
          <span className="text-white/50">Chat</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white/50">Políticas de Privacidade</span>
          <span className="text-white/50">Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
