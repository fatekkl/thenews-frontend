import { useEffect, useState } from "react";
import CustomCalendar, { PostData } from "../CustomCalendar";
import DataItem from "../DataItem/DataItem";
import BadgeContainer from "../Badge";

export default function Authenticated() {
    const [streak, setStreak] = useState(0);
    const [openings, setOpenings] = useState(0);
    const [timeRead, setTimeRead] = useState(0);

    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    useEffect(() => {
        const fetchData = async () => {
            const streak_response = await fetch(`http://127.0.0.1:8787/get_streak?email=${email}`);
            const openings_response = await fetch(`http://127.0.0.1:8787/get_openings?email=${email}`);
            const readPosts_response = await fetch(`http://127.0.0.1:8787/get_readPosts?email=${email}`);

            const jsonData: { data: PostData[] } = await readPosts_response.json();

            jsonData.data.forEach(() => {
                setTimeRead(timeRead + 5);
            });

            if (!streak_response.ok) {
                throw new Error(`Error: ${streak_response.status}`);
            }

            if (!openings_response.ok) {
                throw new Error(`Error: ${openings_response.status}`);
            }

            const streakJsonData = await streak_response.json();
            const openingsJsonData = await openings_response.json();

            setStreak(streakJsonData.data);
            setOpenings(openingsJsonData.data);
        };

        fetchData();
    }, [email]);

    const badges = [
        {
            image: "Expresso",
            title: "Expresso Supremo 🔥",
            text_mtv: "Você chegou ao topo, quanta cafeína foi necessária?☕"
        },
        {
            image: "Ristretto",
            title: "Ristretto Pro ⚡",
            text_mtv: "Puro, forte e direto ao ponto. Você não tem tempo para enrolação!💪"
        },
        {
            image: "Macchiato",
            title: "Mestre do Macchiato 🎨",
            text_mtv: "Um toque de suavidade, mas com a intensidade certa. Você está dominando o jogo! 🥉"
        },
        {
            image: "Mocha",
            title: "Explorador do Mocha 🍫",
            text_mtv: "Doce, mas com energia! Você encontrou o equilíbrio perfeito entre diversão e foco. 💥"
        },
        {
            image: "Latte",
            title: "Café com Latte 🥛☕",
            text_mtv: "Todo mestre começa de algum lugar. Pegue sua xícara e aproveite a jornada! 🤘"
        }
    ];

    const badgeSelect = () => {
        if (streak < 2) {
            return badges[4];
        } else if (streak <= 5) {
            return badges[3];
        } else if (streak <= 10) {
            return badges[2];
        } else if (streak <= 15) {
            return badges[1];
        }
        return badges[0];
    };

    const badgeSelected = badgeSelect();

    return (
        <section className="w-full min-h-screen flex flex-wrap sm:justify-center lg:flex-nowrap gap-6 p-4 sm:p-6 bg-tn_white">

            {/* Aba Esquerda (Badge e Estatísticas) */}
            <div className="w-full sm:w-full lg:w-1/4 flex flex-col items-center p-6 bg-gray-50 rounded-md shadow-md">
                <BadgeContainer image={badgeSelected.image} title={badgeSelected.title} text_mtv={badgeSelected.text_mtv} />

                <div className="text-center mt-6">
                    <h2 className="text-lg sm:text-2xl font-bold mb-2">📊 Estatísticas</h2>
                    <p className="text-sm sm:text-lg font-semibold">📖 Leituras Concluídas: {openings}</p>
                    <p className="text-sm sm:text-lg font-semibold">🏆 Maior Sequência: {streak} dias</p>
                    <p className="text-sm sm:text-lg font-semibold">⏰ Total de Tempo Lido: {timeRead} minutos</p>
                </div>

                <div className="text-center mt-4">
                    <h2 className="text-sm sm:text-lg font-bold mb-2">Extras</h2>
                    <p className="text-sm sm:text-lg font-semibold">Próxima Meta: Aumente sua streak!</p>
                    <p className="text-sm sm:text-lg font-semibold">Última Conquista: {badgeSelected.title}</p>
                </div>
            </div>

            {/* Conteúdo Central */}
            <div className="w-full sm:w-2/3 lg:w-1/2 flex flex-col items-center gap-6">
                <figure className="w-24 sm:w-32">
                    <img src="/assets/thenews_logo.png" alt="Logo do The News" className="w-full" />
                </figure>

                <h1 className="text-center text-xl sm:text-3xl font-bold">
                    Sua Jornada de Leitura
                </h1>
                <p className="mt-2 text-gray-600 text-sm sm:text-lg">
                    Acompanhe seu progresso diário!
                </p>

                <section className="flex flex-wrap justify-center gap-4">
                    <DataItem emoji="🌱" text_value="Dias Seguidos" value={streak} />
                    <DataItem emoji="🏆" text_value="Recorde Pessoal" value={streak} />
                    <DataItem emoji="📚" text_value="Total de Leituras" value={openings} />
                </section>

                <section className="w-full" aria-label="Calendário de progresso">
                    <CustomCalendar />
                </section>
            </div>

            {/* Aba Direita (Engajamento) */}
            <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-col justify-center items-center p-6 bg-gray-50 rounded-md shadow-md">
                <h2 className="text-lg sm:text-xl font-bold text-center mb-4">📊 Engajamento</h2>
                <p className="text-sm sm:text-lg text-gray-700 text-center">
                    Explore os dados de leitura do The News ☕ com gráficos interativos.
                </p>
                <a href="/dashboard" className="mt-6 bg-yellow-500 text-white py-2 px-4 rounded-md text-center hover:bg-yellow-600 transition-all">
                    📈 Ver Painel de Engajamento
                </a>
            </div>

        </section>
    );

}
