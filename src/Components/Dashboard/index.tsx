import RankingItem from "../RankingItem";
import SideBar from "../SideBar";

export default function Dashboard() {
  return (
    <section className="w-screen h-screen flex select-none bg-[#F9FAFB]">
      {/* Barra lateral com menu */}
      <SideBar />

      {/* Conteúdo principal */}
      <main className="w-full h-full flex flex-col">
        
        {/* Cabeçalho do ranking */}
        <header className="bg-tn_yellow w-full rounded-b-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-center text-tn_brown">
            Ranking Geral
          </h1>
        </header>
        
        {/* Seção do ranking */}
        <section className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-4xl w-full mx-auto flex flex-col gap-4">
            
            {/* Cabeçalho da tabela */}
            <div 
              className="grid grid-cols-[80px_1fr_120px_80px] items-center gap-4 
              p-4 rounded-md bg-white shadow-sm border border-gray-200 
              text-lg font-semibold text-[#3d3d3d]"
            >
              <p className="text-center">Posição</p>
              <p className="text-left">Email</p>
              <p className="text-center">Leituras</p>
              <p className="text-center">Streak</p>
            </div>

            <RankingItem email="mathtml.1105@gmail.com" position={1} openings={9}/>
            <RankingItem email="mathtml.1105@gmail.com" position={1} openings={9}/>
            <RankingItem email="mathtml.1105@gmail.com" position={1} openings={9}/>
            <RankingItem email="mathtml.1105@gmail.com" position={1} openings={9}/>
            <RankingItem email="mathtml.1105@gmail.com" position={1} openings={9}/>
            <RankingItem email="mathtml.1105@gmail.com" position={1} openings={9}/>
          </div>
        </section>
      </main>
    </section>
  );
}
