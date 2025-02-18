import React from "react";
import ReactCalendar from "react-calendar";
import "./calendar.css";

const CustomCalendar: React.FC = () => {

  const markedDates = [
    new Date(2025, 3, 10), // 10 de abril de 2025
    new Date(2025, 3, 15), // 15 de abril de 2025
    new Date(2025, 3, 20), // 20 de abril de 2025
  ];

  // atualizar para fazer com que ele receba esses dados da API


  return (
    <div className="h-full w-full border-2 rounded-2xl p-4 text-gra">
      <div className="flex items-center gap-2 mb-2">
        <img src="/assets/calendar.png" className="w-8" alt="Calendário" />
        <p className="text-xl font-bold">Histórico de Leituras</p>
      </div>

      <ReactCalendar

        view="month"
        maxDetail="month"

        showNeighboringMonth={false}

        prevLabel={
          <img src="/assets/left_arrow.svg" className="w-4" />
        }

        nextLabel={
          <img src="/assets/right_arrow.svg" className="w-4" />

        }

        prev2Label={null}
        next2Label={null}


        formatShortWeekday={(_, date) =>
          ["S", "T", "Q", "Q", "S", "S", "D"][date.getDay()]
        }

        tileClassName={
          ({ date, view }) => {
            if (view == "month") {
              const isMarked = markedDates.some(markedDate => date.getFullYear() === markedDate.getFullYear() &&
                date.getMonth() === markedDate.getMonth() &&
                date.getDate() === markedDate.getDate())

                return isMarked ? "marked-date" : ""; // Aplica a classe CSS apenas nos dias marcados
            }
            
          }
        }

        navigationLabel={({ label }) => (
          <div className="w-full text-center text-xl font-bold">
            {label}
          </div>
        )}
      />
    </div>
  );
};

export default CustomCalendar;
