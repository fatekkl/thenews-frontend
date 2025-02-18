interface RankingItemProps {
  position: number;
  email: string;
  openings: number;
  streak?: number; // Adicionando streak como opcional para melhor escalabilidade
}

export default function RankingItem({ position, email, openings, streak = 1 }: RankingItemProps) {
  return (
    <article 
      className="grid grid-cols-[80px_1fr_120px_80px] items-center gap-4 p-4 rounded-md 
      bg-white shadow-sm border border-gray-200 text-lg font-medium text-tn_brown"
      aria-label={`Usuário na posição ${position} com ${openings} leituras e streak de ${streak} dias`}
    >
      {/* Posição no ranking */}
      <p className="text-center font-bold" aria-label={`Posição ${position}`}>{position}</p>

      {/* Email do usuário */}
      <p className="text-left break-all" aria-label={`Email: ${email}`}>{email}</p>

      {/* Número de leituras */}
      <p className="text-center" aria-label={`Total de leituras: ${openings}`}>{openings}</p>

      {/* Streak de leitura */}
      <div className="flex items-center justify-around" aria-label={`Streak de ${streak} dias`}>
        <span className="text-2xl" role="img" aria-label="Fogo">
          🔥
        </span>
        <span className="text-xl">{streak}</span>
      </div>
    </article>
  );
}
