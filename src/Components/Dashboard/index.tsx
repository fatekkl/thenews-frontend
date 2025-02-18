import Menu from "../Menu";
import RankingItem from "../RankingItem";
import SideBar from "../SideBar";

export default function Dashboard() {
  return (
    <section className="w-screen h-screen flex select-none bg-[#F9FAFB]">
      {/* Lateral esquerda: Menu e SideBar */}
      <SideBar />

      {/* Conteúdo principal */}
      <div className="w-full h-full flex flex-col">
        
        {/* Topo amarelo com título */}
        <div className="bg-tn_yellow w-full  rounded-b-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-center text-tn_brown">
            Ranking Geral
          </h1>
        </div>
        
        {/* Seção de tabela (cabeçalho + itens) */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-4xl w-full mx-auto flex flex-col gap-4">
            
            {/* Cabeçalho das colunas (corrigido) */}
            <div className="grid grid-cols-[80px_1fr_120px_80px] items-center gap-4 p-4 rounded-md bg-white shadow-sm border border-gray-200 text-lg font-semibold text-[#3d3d3d]">
              <p className="text-center">Posição</p>
              <p className="text-left">Email</p>
              <p className="text-center">Leituras</p>
              <p className="text-center">Streak</p>
            </div>
            
            {/* Itens do ranking */}
            <RankingItem position={1} email="mathtml.1105@gmail.com" openings={9} />
            <RankingItem position={2} email="kingmatheuz0912@gmail.com" openings={6} />
            <RankingItem position={3} email="fatekkl.dev@gmail.com" openings={3} />
            <RankingItem position={4} email="outro.email@gmail.com" openings={2} />
            <RankingItem position={5} email="exemplo@gmail.com" openings={1} />
            <RankingItem position={6} email="outra.pessoa@gmail.com" openings={0} />
            <RankingItem position={1} email="mathtml.1105@gmail.com" openings={9} />
            <RankingItem position={2} email="kingmatheuz0912@gmail.com" openings={6} />
            <RankingItem position={3} email="fatekkl.dev@gmail.com" openings={3} />
            <RankingItem position={4} email="outro.email@gmail.com" openings={2} />
            <RankingItem position={5} email="exemplo@gmail.com" openings={1} />
            <RankingItem position={6} email="outra.pessoa@gmail.com" openings={0} />
            <RankingItem position={1} email="mathtml.1105@gmail.com" openings={9} />
            <RankingItem position={2} email="kingmatheuz0912@gmail.com" openings={6} />
            <RankingItem position={3} email="fatekkl.dev@gmail.com" openings={3} />
            <RankingItem position={4} email="outro.email@gmail.com" openings={2} />
            <RankingItem position={5} email="exemplo@gmail.com" openings={1} />
            <RankingItem position={6} email="outra.pessoa@gmail.com" openings={0} />
            
          </div>
        </div>
      </div>
    </section>
  );
}
