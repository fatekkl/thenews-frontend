import DonutChart from "../DonutChart";

export default function Engagement() {
  return (
    <main className="bg-tn_yellow min-h-screen p-8">
      {/* Cabeçalho: informa qual é o propósito da página */}
      <header className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Engajamento de Usuários</h1>
        <p className="text-lg mt-2 text-gray-700">
          Esse é o gráfico de engajamento
        </p>
      </header>
        

      {/* Seção do conteúdo principal, incluindo o Gráfico de Rosca (DonutChart) */}
      <section
        className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md"
        aria-labelledby="engagement-chart-heading"
      >
        <h2 id="engagement-chart-heading" className="text-xl font-semibold mb-4 text-gray-800">
          Visão Geral do Engajamento
        </h2>

        

        <div className="flex justify-center items-center mb-6">
          <DonutChart />
        </div>

       
      </section>
      
    </main>
  );
}
