export default function InputMail() {
    return (
        <div className="relative w-full max-w-full flex flex-wrap items-center border-2 border-tn_yellow rounded-lg bg-[#F9FAFB] pr-10">
            {/* Ícone à esquerda */}
            <img 
                src="../../assets/email.png" 
                alt="Logo"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
            
            {/* Input */}
            <input 
                type="email" 
                placeholder="coloque seu melhor e-mail" 
                className="bg-transparent p-4 pl-12 pr-24 w-full outline-none text-tn_black placeholder-tn_gray"
            />

            {/* Botão amarelo à direita */}
            <button className="absolute right-2 bg-tn_yellow text-tn_gray px-5 md:px-6 py-2 rounded-lg w- font-semibold">
                entrar
            </button>
            
        </div>
    );
}
