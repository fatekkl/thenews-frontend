import React from "react";

interface InputMailProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputMail({ email, setEmail }: InputMailProps) {
  return (
    <form 
      className="relative w-full max-w-full flex flex-wrap items-center border-2 border-tn_yellow rounded-lg bg-[#F9FAFB] pr-10"
      aria-label="Formulário de entrada de e-mail"
      onSubmit={(e) => e.preventDefault()} // Previne o recarregamento ao apertar Enter
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Coloque seu melhor e-mail" 
        className="bg-transparent p-4 pl-12 pr-24 w-full outline-none text-tn_black placeholder-tn_gray"
        aria-describedby="email-helper"
      />
    </form>
  );
}
