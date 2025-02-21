import React, { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "./calendar.css";

// Definição do tipo para os dados da API
export interface PostData {
  postId: string;
  created_at: string;
}

const CustomCalendar: React.FC = () => {
  const [markedDates, setMarkedDates] = useState<Date[]>([]);

  const params = new URLSearchParams(window.location.search);
  const API_URL = import.meta.env.VITE_API_URL
  const email = params.get("email")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}/get_readPosts?email=${email}`
        );

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const jsonData: { data: PostData[] } = await response.json();

        // Mapeando os dados para um formato de data correto
        const formattedDates = jsonData.data.map(({ postId }) => {
          const dateString = postId.replace("post_", ""); // Extraindo a data do postId
          const [year, month, day] = dateString.split("-").map(Number);
          return new Date(year, month - 1, day);
        });

        console.log(formattedDates)
        setMarkedDates(formattedDates);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-full border-2 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <img src="/assets/calendar.png" className="w-8" alt="Calendário" />
        <p className="text-xl font-bold">Histórico de Leituras</p>
      </div>

      <ReactCalendar
        locale="pt-BR"
        calendarType="iso8601" // 🔥 Garante que a semana começa na segunda-feira
        view="month"
        maxDetail="month"
        showNeighboringMonth={false} // 🔥 Não exibe os dias do mês anterior/posterior

        prevLabel={<img src="/assets/left_arrow.svg" className="w-4" />}
        nextLabel={<img src="/assets/right_arrow.svg" className="w-4" />}
        prev2Label={null}
        next2Label={null}

        // 🔥 Corrige os dias da semana para exibição correta (Seg - Dom)
        formatShortWeekday={(_, date) =>
          ["D", "S", "T", "Q", "Q", "S", "S"][date.getDay()]
        }

        // 🔥 Marca corretamente os dias
        tileClassName={({ date, view }) => {
          if (view === "month") {
            const isMarked = markedDates.some((markedDate) => {
              return (
                date.getFullYear() === markedDate.getFullYear() &&
                date.getMonth() === markedDate.getMonth() &&
                date.getDate() === markedDate.getDate()
              );
            });
            return isMarked ? "marked-date" : "";
          }
        }}

        navigationLabel={({ label }) => (
          <div className="w-full text-center text-xl font-bold">{label}</div>
        )}
      />
    </div>
  );
};

export default CustomCalendar;
