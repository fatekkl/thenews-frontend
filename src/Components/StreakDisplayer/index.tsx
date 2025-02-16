
import { useState } from "react"

export default function StreakDisplayer() {
    const [streak, setStreak] = useState(0)

    return (
        <div className="relative flex flex-col items-center justify-center">
            {/* Fogo como fundo do streak */}
            <img className="w-52 h-52 object-contain" src="../../assets/fire.png" alt="Streak Fire"/>
            
            {/* Número da streak centralizado */}
            <span className="absolute translate-y-7 text-tn_brown font-bold text-4xl">{streak}</span>
        </div>
    )
}
