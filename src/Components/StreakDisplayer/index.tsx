interface Flame {
    width: number;
    height: number;
    streak: number;
  }
  
  export default function StreakDisplayer({ width, height, streak }: Flame) {
    return (
      <div 
        className="relative flex items-center justify-center"
        style={{ width, height }}
      >
        <img
          className="object-contain"
          width={width}
          height={height}
          src="/assets/flame.svg"
          alt="Streak Fire"
        />
        <span className="absolute font-bold translate-y-2 text-tn_brown">
          {streak}
        </span>
      </div>
    );
  }
  