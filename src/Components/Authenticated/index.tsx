import { useEffect, useState } from "react";
import CustomCalendar, { PostData } from "../CustomCalendar";
import DataItem from "../DataItem/DataItem";
import BadgeContainer from "../Badge";

export default function Authenticated() {
    const [streak, setStreak] = useState(0);
    const [openings, setOpenings] = useState(0);
    const [timeRead, setTimeRead] = useState(0)

    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    useEffect(() => {
        const fetchData = async () => {
            const streak_response = await fetch(`http://127.0.0.1:8787/get_streak?email=${email}`);
            const openings_response = await fetch(`http://127.0.0.1:8787/get_openings?email=${email}`);
            const readPosts_response = await fetch(`http://127.0.0.1:8787/get_readPosts?email=${email}`);

            const jsonData: { data: PostData[] } = await readPosts_response.json();


            jsonData.data.forEach(() => {
                setTimeRead(timeRead + 5)
            })

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


    const badges = [{
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
    },


    ]

    const badgeSelect = () => {

        if (streak < 2) {
            return badges[4]
        } else if (streak <= 5) {
            return badges[3]
        } else if (streak <= 10) {
            return badges[2]
        } else if (streak <= 15) {
            return badges[1]
        }
        return badges[4]
    }


    const badgeSelected = badgeSelect()


    return (
        <section className="w-full h-screen flex justify-between gap-8 p-8 bg-tn_white flex-wrap">

            {/* Aba Esquerda (estatísticas, extras e badge) */}
            <div className="w-1/4 h-full flex flex-col justify-start items-center p-8 gap-6 bg-gray-50 rounded-md shadow">
                {/* Badge de nível */}
                <BadgeContainer image={badgeSelected.image} title={badgeSelected.title} text_mtv={badgeSelected.text_mtv} />

                {/* Estatísticas */}
                <div className="text-center">
                    <h2 className="text-lg font-bold mb-2">📊 Estatísticas</h2>
                    <p className="text-sm"><strong>📖 Leituras Concluídas:</strong> {openings}</p>
                    <p className="text-sm"><strong>🏆 Maior Sequência:</strong> {streak} dias</p>
                    {/* Se não tiver o tempo total de leitura, pode manter como placeholder ou remover */}
                    <p className="text-sm"><strong>⏰ Total de Tempo Lido: {timeRead} minutos</strong> {/* IMPLEMENTAR LÓGICA QUE ADICIONARÁ 5 MINUTOS PARA POST EM READ_POSTS DO USUÁRIO */}</p>
                </div>

                {/* Extras / Metas */}
                <div className="text-center mt-4">
                    <h2 className="text-lg font-bold mb-2">Extras</h2>
                    <p className="text-sm">
                        <strong>Próxima Meta:</strong> Aumente sua streak o máximo que puder!
                    </p>
                    <p className="text-sm">
                        <strong>Última Conquista: {badgeSelected.title}</strong>
                    </p>
                </div>
            </div>

            {/* Conteúdo Central */}
            <div className="w-full max-w-screen-md flex flex-col items-center gap-4">
                {/* Logo do aplicativo */}
                <figure className="w-32 sm:w-40">
                    <img
                        src="/assets/thenews_logo.png"
                        alt="Logo do The News"
                        className="w-full"
                    />
                </figure>

                {/* Título principal */}
                <h1 className="text-center text-2xl sm:text-4xl font-bold">
                    Sua Jornada de Leitura
                </h1>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Acompanhe seu progresso diário!
                </p>

                {/* Seção de estatísticas rápidas */}
                <section
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    aria-label="Estatísticas de leitura"
                >
                    <DataItem emoji="🌱" text_value="Dias Seguidos" value={streak} />
                    <DataItem emoji="🏆" text_value="Recorde Pessoal" value={streak} />
                    <DataItem emoji="📚" text_value="Total de Leituras" value={openings} />
                </section>

                {/* Calendário interativo */}
                <section aria-label="Calendário de progresso">
                    <CustomCalendar />
                </section>
            </div>

            {/* Aba Direita (no momento, apenas fundo preto) */}
            {/* Aba Direita - Painel de Engajamento */}
            <div className="w-1/4 h-full bg-gray-50 p-6 flex flex-col justify-center items-center rounded-md shadow-lg">
                <h2 className="text-lg font-bold text-center mb-4">📊 Engajamento</h2>

                <p className="text-xl text-gray-700 text-center">
                    Explore os dados de leitura do the news ☕ com gráficos interativos.
                </p>

                {/* Botão para acessar a página de Engajamento */}
                <a
                    href="/dashboard"
                    className="mt-6 bg-yellow-500 text-white py-2 px-4 rounded-md text-center hover:bg-yellow-600 transition-all"
                >
                    📈 Ver Painel de Engajamento
                </a>
            </div>

        </section>
    );
}
