import Menu from "../Menu";
import HistoryItem from "../HistoryItem";

export default function Authenticated() {
    return (
        <section className="w-screen h-screen flex flex-col bg-tn_white">
            <Menu aline="transform scale-x-[-1]" justify="justify-end" />

            {/* Conteúdo Principal */}
            <div className="flex flex-col items-center justify-center flex-1 px-6 py-4">

                {/* Logo e Título */}
                <div className="my-6 flex flex-col items-center">
                    <img
                        src="/assets/thenews_logo.png"
                        alt="The News Logo"
                        className="w-40 object-contain mb-4"
                    />
                    <h1 className="text-4xl text-tn_yellow font-bold text-center">
                        Veja sua sequência
                    </h1>
                </div>


                {/* Histórico */}
                <div className="bg-[#F9FAFB] border border-tn_yellow rounded-lg p-4 w-full max-w-md shadow-lg flex flex-col gap-4 overflow-y-auto">
                    {/* Substitua esses itens com seu array de datas */}
                    <HistoryItem content="15/02/2025" />
                    <HistoryItem content="14/02/2025" />
                    <HistoryItem content="13/02/2025" />
                    <HistoryItem content="12/02/2025" />
                    <HistoryItem content="11/02/2025" />
                    <HistoryItem content="10/02/2025" />
                    <HistoryItem content="09/02/2025" />
                </div>
            </div>

            {/* Rodapé Motivacional */}
            <div className="bg-tn_yellow py-6 flex items-center justify-center">
                <h1 className="text-tn_brown font-bold text-2xl text-center">
                    Sua sequência está forte como um expresso!
                </h1>
            </div>
        </section>
    );
}
