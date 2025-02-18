import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Tipagem dos dados
interface ChartData {
    name: string;
    value: number;
}

// Cores do gráfico
const COLORS = ["#4267B2", "#1DA1F2", "#008000", "#FCAF45"];

export default function DonutChart() {
    const [data, setData] = useState<ChartData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // 🔹 Criamos a função assíncrona dentro do useEffect
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8787/get_utm");

                

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const jsonData = await response.json();

              

                // 🔹 Transformamos os dados no formato esperado pelo Recharts
                const formattedData = jsonData.data.map((item: { name: string; counter: number }) => ({
                    name: item.name,
                    value: item.counter
                }));
                console.log(formattedData)
                setData(formattedData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Erro desconhecido");
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        console.log(data)
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {loading ? (
                <p className="text-gray-700">Carregando...</p>
            ) : error ? (
                <p className="text-red-600">Erro: {error}</p>
            ) : (
                <div className="w-full flex h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={100}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}
