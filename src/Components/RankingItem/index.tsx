import StreakDisplayer from "../StreakDisplayer";

interface RankingItemProps {
  position: number;
  email: string;
  openings: number;
}

export default function RankingItem({ position, email, openings }: RankingItemProps) {
  return (
    <div className="grid grid-cols-[80px_1fr_120px_80px] items-center gap-4 p-4 rounded-md bg-white shadow-sm border border-gray-200 text-lg font-medium text-tn_brown">
      {/* Posição */}
      <p className="text-center">{position}</p>

      {/* Email */}
      <p className="text-left break-all">{email}</p>

      {/* Aberturas */}
      <p className="text-center">{openings}</p>

      {/* Streak */}
      <div className="flex justify-center">
        <StreakDisplayer streak={8} width={40} height={40} />
      </div>
    </div>
  );
}
