import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="w-1/3 h-full bg-tn_white flex flex-col justify-start items-start ">
            {/* Container alinhado ao topo */}
            <div className="flex flex-col gap-4 mt-10 ml-10">
                {/* Texto alinhado à esquerda da imagem */}
                <Link to={"/authenticated"} className="flex items-center gap-8">
                    <img
                        className="w-20 h-20 object-contain"
                        src="/assets/thenews_logo.png"
                        alt="Logo The News"
                    />
                    <h1 className="text-tn_yellow text-3xl font-bold leading-none">
                        the news
                    </h1>

                    {/* Imagem à direita do texto */}
                </Link>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-around font-bold text-3xl">
                <p>Engajamento</p>
                <p>Ranking</p>
            </div>
        </div>
    )
}