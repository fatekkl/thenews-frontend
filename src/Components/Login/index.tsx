import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMail from "../InputMail";

export default function Login() {
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail digitado
  const navigate = useNavigate(); // Hook para navegação

  const API_URL_ROOT = import.meta.env.VITE_API_URL

  const API_URL = `${API_URL_ROOT}/get_user?email=`



  const handleLogin = async () => {
    const trimmedEmail = email.trim(); // Remove espaços antes e depois do email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
    
    if (trimmedEmail && emailRegex.test(trimmedEmail)) {
      const response = await fetch(`${API_URL}${trimmedEmail}`)
      
      const jsonData = await response.json()

      if (jsonData.success) {
        navigate(`/home/?email=${encodeURIComponent(trimmedEmail)}`);
      } else {
        alert("Email não encontrado")
      }
      
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };

  return (
    <main className="w-screen h-screen bg-tn_white flex justify-between">
      
      {/* Seção da esquerda com informações e input */}
      <section className="flex flex-col justify-center items-start w-full h-full pl-20">
        
        {/* Logo e título */}
        <header className="flex flex-col items-center justify-start gap-12">
          <img src="/assets/thenews_logo.png" className="w-40" alt="Logo do The News" />
          <p className="text-tn_yellow font-bold text-2xl">The News</p>
        </header>

        {/* Texto de boas-vindas e entrada de e-mail */}
        <section className="flex flex-col gap-12 pr-10">
          
          {/* Mensagem principal */}
          <article className="flex flex-col gap-2">
            <h1 className="text-tn_black font-bold text-4xl">
              Seja o maior leitor, do maior jornal digital.
            </h1>
            <p className="text-tn_black font-bold text-2xl">
              Nos conte qual o seu e-mail, e veja quantos pontos acumulou por ler diariamente!
            </p>
          </article>
          
          {/* Campo de e-mail e botão de entrar */}
          <article className="flex flex-col gap-4">
            <InputMail email={email} setEmail={setEmail} />
            <button
              onClick={handleLogin}
              className="bg-tn_yellow text-black font-bold text-lg px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Entrar
            </button>
            <p className="text-tn_yellow text-xl font-bold">
              Se destaque entre +2M de leitores.
            </p>
          </article>

        </section>
      </section>

      {/* Seção da direita com o fundo amarelo */}
      <aside className="h-screen w-1/3 bg-tn_yellow p-0" aria-hidden="true" />
    </main>
  );
}
