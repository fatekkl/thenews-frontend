interface DataItemProps {
    emoji: string;
    value: number;
    text_value: string;
  }
  
  export default function DataItem({ emoji, value, text_value }: DataItemProps) {
    return (
      <article 
        className="w-56 h-36 p-6 border-2 rounded-xl flex flex-col justify-between 
        hover:border-tn_yellow transition-all duration-300"
        aria-label={`Estatística: ${text_value} - ${value}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-5xl" role="img" aria-label={text_value}>
            {emoji}
          </span>
          <strong className="text-4xl font-bold text-tn_yellow">{value}</strong>
        </div>
        <p className="text-gray-400">{text_value}</p>
      </article>
    );
  }
  