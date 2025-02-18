import InputMail from "../InputMail";

export default function Login() {
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
          
          {/* Campo de e-mail */}
          <article className="flex flex-col gap-2">
            <InputMail />
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
