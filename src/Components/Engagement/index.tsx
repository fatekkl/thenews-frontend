import { useEffect, useState } from "react";
import { DashboardProps } from "../Dashboard";
import EngagementItem from "../EngamentItem";
import Dropdown from "../Dropdown";
import CustomChart from "../CustomChart";
import Ranking from "../Ranking";

/**
 * Interface para os dados da API "get_utm".
 */
interface UTMData {
  name: string;
  clicks: number;
  leads: number;
}

export default function Engagement({ users }: DashboardProps) {
  const [data, setData] = useState<UTMData[]>([]);
  const [mediumData, setMediumData] = useState<UTMData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [utmType, setUtmType] = useState("source");

  const api_address = "http://127.0.0.1:8787/get_utm?utm_name=utm_";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_address}${utmType}`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const jsonData = await response.json();
        if (jsonData?.data) {
          setData(jsonData.data);
        } else {
          throw new Error("Formato de resposta inesperado da API.");
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Erro desconhecido ao buscar dados.");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchMediumData = async () => {
      try {
        const response = await fetch(`${api_address}medium`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const jsonData = await response.json();

        // Garante que estamos armazenando um array do tipo UTMData[]
        setMediumData(jsonData.data || []);
      } catch (error: any) {
        console.error(error);
        setError(error.message || "Erro desconhecido ao buscar dados.");
      }
    };

    fetchMediumData();
    fetchData();
  }, [utmType]);

  return (
    <section className="min-h-screen w-full flex flex-col items-center bg-gray-900 px-4 py-8">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-tn_yellow">Engajamento</h1>
          <img src="/assets/thenews_logo.png" alt="Logo do The News" className="w-12" />
        </div>
        <h2 className="text-gray-400 text-xl text-center">
          Acompanhe o engajamento dos grãos que estão crescendo com o
          <strong className="text-tn_yellow"> the news ☕</strong>
        </h2>
      </div>

      {/* Área de conteúdo principal */}
      {isLoading && <p className="text-gray-200">Carregando dados de engajamento...</p>}
      {error && <p className="text-red-400 font-semibold">Ocorreu um erro: {error}</p>}

      {!isLoading && !error && (
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
          {/* Card de métricas */}
          <div className="bg-gray-800/50 border-2 border-gray-700 hover:border-tn_yellow/80 rounded-xl p-6 text-gray-400 flex flex-col gap-6 w-full md:w-1/3 lg:w-1/4 xl:w-1/6 transition-all duration-500">
            <h1 className="text-xl font-bold text-center">Mídias que mais atraíram cliques:</h1>

            {/* Correção do map */}
            {mediumData.length > 0 ? (
              mediumData.map((item) => (
                <EngagementItem key={item.name} name={item.name} value={item.clicks} />
              ))
            ) : (
              <p className="text-gray-500 text-sm text-center">Nenhum dado disponível</p>
            )}

            {/* Itens fixos de exemplo */}
            <EngagementItem name="Email" value={10} />
            <EngagementItem name="Orgânico" value={4} />
            <EngagementItem name="Social" value={8} />
            <EngagementItem name="Referral" value={9} />
          </div>

          {/* Seção do dropdown e gráfico */}
          <div className="flex flex-col gap-8 w-full md:w-2/3 lg:w-1/2">
            {/* Dropdown */}
            <div className="border-2 border-gray-700 bg-gray-800/50 hover:border-tn_yellow/80 rounded-xl p-6 flex justify-center transition-all duration-500 h-52">
              <Dropdown utmType={utmType} setUtmType={setUtmType} />
            </div>

            {/* Gráfico */}
            <div className="border-2 border-gray-700 bg-gray-800/50 hover:border-tn_yellow/80 rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 transition-all duration-500 h-96">
              <CustomChart data={data} />
            </div>
          </div>
        </div>
      )}
      <Ranking users={users} />
    </section>
  );
}
