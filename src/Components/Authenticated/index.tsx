import CustomCalendar from "../Calendar";
import DataItem from "../DataItem/DataItem";

export default function Authenticated() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center bg-tn_white p-4">
            <div className="w-full max-w-screen-md flex flex-col items-center gap-4">

                {/* Logo do aplicativo */}
                <figure className="w-32 sm:w-40">
                    <img src="/assets/thenews_logo.png" alt="Logo do The News" className="w-full" />
                </figure>

                {/* Título principal */}
                <h1 className="text-center text-2xl sm:text-4xl font-bold">
                    Sua Jornada de Leitura
                </h1>

                {/* Texto auxiliar */}
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Acompanhe seu progresso diário!
                </p>

                {/* Seção de estatísticas */}
                <section className="flex flex-col sm:flex-row gap-6 justify-center items-center" aria-label="Estatísticas de leitura">
                    <DataItem emoji="🌱" text_value="Dias Seguidos" value={1} />
                    <DataItem emoji="🏆" text_value="Recorde Pessoal" value={1} />
                    <DataItem emoji="📚" text_value="Total de Leituras" value={1} />
                </section>

                {/* Calendário interativo */}
                <section aria-label="Calendário de progresso">
                    <CustomCalendar />
                </section>

            </div>
        </section>
    );

}
