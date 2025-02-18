import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="w-1/4 h-full bg-tn_white flex flex-col justify-start items-start">
      
      {/* Cabeçalho da Sidebar */}
      <header className="flex flex-col gap-4 mt-10 ml-10">
        {/* Logo e Nome */}
        <Link to="/authenticated" className="flex items-center gap-8">
          <img
            className="w-20 h-20 object-contain"
            src="/assets/thenews_logo.png"
            alt="Logo do The News"
          />
          <h1 className="text-tn_yellow text-3xl font-bold leading-none">
            The News
          </h1>
        </Link>
      </header>

      {/* Menu de Navegação */}
      <nav className="h-full w-full flex flex-col items-center justify-around font-bold text-3xl">
        <Link to="/engagement" className="hover:text-tn_yellow transition duration-300">
          Engajamento
        </Link>
        <Link to="/ranking" className="hover:text-tn_yellow transition duration-300">
          Ranking
        </Link>
      </nav>
    </aside>
  );
}
