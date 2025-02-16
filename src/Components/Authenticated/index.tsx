import HistoryItem from "../HistoryItem"
import StreakDisplayer from "../StreakDisplayer"

function Authenticated() {
    return (
        <section className="w-screen h-screen bg-tn_white flex flex-col justify-between items-center">
            {/* Container principal com alinhamento correto */}
            <div className="w-full h-full flex items-center justify-center px-20 mt-20">

                {/* Retângulo marrom à esquerda */}
                <div className="w-60 h-20 bg-tn_brown" />

                {/* Logo e texto centralizados */}
                <div className="flex flex-col items-center justify-center gap-6 flex-1">
                    <img src="/assets/thenews_logo.png" className="w-60 object-contain" />
                    <p className="text-tn_yellow font-bold text-5xl text-center">Veja sua sequência</p>
                </div>

                {/* Streak Displayer centralizado */}
                <div className="w-60 flex items-center justify-center">
                    <StreakDisplayer />
                </div>
            </div>

            {/* Barra inferior marrom centralizada */}
            <div className="h-full w-96 mb-8 p-4 flex flex-col gap-6 overflow-auto">
                <HistoryItem content={"15/02/2025"} />
                <HistoryItem content={"14/02/2025"} />
                <HistoryItem content={"13/02/2025"} />
                <HistoryItem content={"15/02/2025"} />
                <HistoryItem content={"14/02/2025"} />
                <HistoryItem content={"13/02/2025"} />
                <HistoryItem content={"15/02/2025"} />
                <HistoryItem content={"14/02/2025"} />
                <HistoryItem content={"13/02/2025"} />
            </div>

            {/* Texto motivacional na parte inferior */}
            <div className="h-1/3 w-screen bg-tn_yellow flex items-center justify-center">
                <h1 className="text-tn_brown font-bold text-center text-3xl">
                    Sua sequência está forte como um expresso!
                </h1>
            </div>
        </section>
    )
}

export default Authenticated
