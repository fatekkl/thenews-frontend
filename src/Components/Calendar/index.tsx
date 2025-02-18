import React from "react";
import ReactCalendar from "react-calendar";
import "./calendar.css";

const CustomCalendar: React.FC = () => {

  const markedDates = [
    new Date(2025, 1, 10), // 10 de fevereiro de 2025
    new Date(2025, 1, 15), // 15 de fevereiro de 2025
    new Date(2025, 1, 20), // 20 de fevereiro de 2025
  ];

  // atualizar para fazer com que ele receba esses dados da API


  return (
    <section className="h-full w-full border-2 rounded-2xl p-4 text-gray-800">
      {/* Cabeçalho do calendário */}
      <header className="flex items-center gap-2 mb-2">
        <img src="/assets/calendar.png" className="w-8" alt="Ícone do calendário" />
        <h2 className="text-xl font-bold">Histórico de Leituras</h2>
      </header>

      {/* Calendário */}
      <ReactCalendar
        view="month"
        maxDetail="month"
        showNeighboringMonth={false}

        prevLabel={<img src="/assets/left_arrow.svg" className="w-4" alt="Mês anterior" />}
        nextLabel={<img src="/assets/right_arrow.svg" className="w-4" alt="Próximo mês" />}
        prev2Label={null}
        next2Label={null}

        formatShortWeekday={(_, date) =>
          ["S", "T", "Q", "Q", "S", "S", "D"][date.getDay()]
        }

        tileClassName={({ date, view }) => {
          if (view === "month") {
            const isMarked = markedDates.some(markedDate =>
              date.getFullYear() === markedDate.getFullYear() &&
              date.getMonth() === markedDate.getMonth() &&
              date.getDate() === markedDate.getDate()
            );
            return isMarked ? "marked-date" : "";
          }
          return "";
        }}

        navigationLabel={({ label }) => (
          <div className="w-full text-center text-xl font-bold">
            {label}
          </div>
        )}
      />
    </section>
  );
};

export default CustomCalendar;
