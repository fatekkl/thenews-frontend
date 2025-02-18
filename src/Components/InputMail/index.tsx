import { Link } from "react-router-dom";

export default function InputMail() {
  return (
    <form 
      className="relative w-full max-w-full flex flex-wrap items-center border-2 border-tn_yellow rounded-lg bg-[#F9FAFB] pr-10"
      aria-label="Formulário de entrada de e-mail"
    >
      {/* Ícone de e-mail à esquerda */}
      <label htmlFor="email-input" className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <img 
          src="/assets/email.png" 
          alt="Ícone de e-mail"
          className="w-6 h-6"
        />
      </label>
      
      {/* Input de e-mail */}
      <input 
        id="email-input"
        type="email"
        placeholder="Coloque seu melhor e-mail" 
        className="bg-transparent p-4 pl-12 pr-24 w-full outline-none text-tn_black placeholder-tn_gray"
        aria-describedby="email-helper"
      />

      {/* Botão amarelo à direita */}
      <Link 
        to="/authenticated" 
        className="absolute right-2 bg-tn_yellow text-tn_gray px-5 md:px-6 py-2 rounded-lg font-semibold"
        role="button"
      >
        Entrar
      </Link>
    </form>
  );
}
