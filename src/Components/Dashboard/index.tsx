import { useEffect, useState } from "react";
import Engagement from "../Engagement";
import Ranking from "../Ranking";

export interface DashboardProps {
  users: User[];
}

export interface User {
  id: number;
  email: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_channel: string;
  openings: number;
  streak: number;
  last_open_date: string;
  read_posts: { postId: string; created_at: string }[];
}

export default function Dashboard() {
  const params = new URLSearchParams(window.location.search);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8787/all_users");

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const jsonData = await response.json();

        // Garante que jsonData seja sempre um array antes de setar o estado
        if (jsonData.success && Array.isArray(jsonData.data)) {
          // Converte read_posts de string para array de objetos
          const formattedUsers = jsonData.data.map((user: any) => ({
            ...user,
            read_posts: JSON.parse(user.read_posts || "[]"), // Converte read_posts JSON string para array
          }));

          setUsers(formattedUsers);
        } else {
          console.error("Erro: API retornou um formato inesperado", jsonData);
          setUsers([]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setUsers([]); // Garante que `users` sempre seja um array
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col select-none bg-[#F9FAFB]">
      {/* Barra lateral com menu */}
      {/* Conteúdo principal */}
      <main className="w-full h-full flex flex-col">
        <Engagement users={users}/>
      </main>
      
    </section>
  );
}
