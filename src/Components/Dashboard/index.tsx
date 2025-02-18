import Engagement from "../Engagement";
import SideBar from "../SideBar";

export default function Dashboard() {
  return (
    <section className="w-screen h-screen flex select-none bg-[#F9FAFB]">
      {/* Barra lateral com menu */}
      <SideBar />

      {/* Conteúdo principal */}
      <main className="w-full h-full flex flex-col">
        
        <Engagement/>
      </main>
    </section>
  );
}
