

export default function EngagementItem({name = "", value = 0}) {
    return (
        <div className="flex items-baseline justify-between gap-4 text-lg">
            <p className="font-bold">{name}</p>
            <p className="text-tn_yellow">{value}</p>
        </div>
    )
}