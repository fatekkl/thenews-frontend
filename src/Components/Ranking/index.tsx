import RankingItem from "../RankingItem";
import { DashboardProps } from "../Dashboard";


// Definição correta da interface User


export default function Ranking({ users }: DashboardProps) {


    const userFiltered = [...users].sort(
        (a, b) => (b.streak ?? 0) - (a.streak ?? 0)
    );

    return (
        <>
            <header className=" w-full rounded-b-2xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-400">
                    Streak Ranking
                </h1>
            </header>

            <section className="flex-1 overflow-y-auto px-8 py-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col gap-4">
                    {/* Cabeçalho da tabela */}
                    <div className="grid grid-cols-[80px_1fr_120px_80px] items-center gap-4 p-4 rounded-xl bg-gray-800/50 shadow-sm border-2 border-gray-800 text-lg font-semibold text-gray-400">
                        <p className="text-center">Posição</p>
                        <p className="text-left">Email</p>
                        <p className="text-center">Leituras</p>
                        <p className="text-center">Streak</p>
                    </div>

                    {/* Evita erro caso `userFiltered` não seja um array */}
                    {userFiltered.length > 0 ? (
                        userFiltered.map((x, index) => (
                            <RankingItem
                                key={x.id} // Usando o ID do usuário como chave única
                                position={index + 1}
                                email={x.email}
                                openings={x.openings}
                                streak={x.streak ?? 1} // Garante que streak nunca seja undefined
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 mt-4">Nenhum usuário encontrado.</p>
                    )}
                </div>
            </section>
        </>
    );
}
