import CustomCalendar from "../Calendar";
import DataItem from "../DataItem/DataItem";

export default function Authenticated() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-tn_white p-4">
      {/* 
        max-w-screen-md limita a largura em telas grandes,
        garantindo um layout mais bonito.
      */}
      <div className="w-full max-w-screen-md flex flex-col items-center gap-4">
        {/* Logo responsiva: em telas menores fica w-32, em telas >=sm w-40 */}
        <img className="w-32 sm:w-40" src="/assets/thenews_logo.png" />

        {/* Título: em telas menores text-2xl, depois aumenta para text-4xl */}
        <span className="text-center text-2xl sm:text-4xl font-bold">
          Sua Jornada de Leitura
        </span>

        {/* Texto auxiliar: diminui em telas muito pequenas */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Acompanhe seu progresso diário!
        </p>

        {/* 
          Seção dos DataItems: em telas pequenas (sm:<640px) empilha em coluna,
          a partir de sm usa flex-row lado a lado. 
        */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <DataItem emoji="🌱" text_value="Dias Seguidos" value={1} />
          <DataItem emoji="🏆" text_value="Recorde Pessoal" value={1} />
          <DataItem emoji="📚" text_value="Total de Leituras" value={1} />
        </div>

        {/* Calendário (assumindo que ele mesmo já está responsivo) */}
        <CustomCalendar/>
      </div>
    </section>
  );
}
