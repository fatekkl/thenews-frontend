

export default function Badge({image = "", title = "", text_mtv = ""}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={`/assets/${image}.png`} />
            <h1 className="text-2xl text-tn_brown font-bold p-16">{title}</h1>
            <span className="text-tn_brown text-xl text-center font-bold">{text_mtv}</span>
        </div>
    )
}