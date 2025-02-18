

interface DataItem {
    emoji: string,
    value: number,
    text_value: string
}

export default function DataItem({emoji, value, text_value}: DataItem) {
    return (
        <div className="w-56 h-36 p-6 border-2 rounded-xl flex flex-col justify-between hover:border-tn_yellow transition-all duration-300">
            <div className="flex items-center justify-between">
                <span className="text-5xl">{emoji}</span>
                <span className="text-4xl font-bold text-tn_yellow">{value}</span>
            </div>
            <span className="text-gray-400">{text_value}</span>
        </div>
    )
}