import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

interface CustomCharProps {
    data: Object[]
}

export default function CustomChart({ data }: CustomCharProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} >
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis dataKey={"counter"} stroke="#9ca3af" />
                <Tooltip
                    contentStyle={{ backgroundColor: "#1F2937", border: "solid", borderRadius: 10, borderColor: "#374151", color: "#fff" }}
                    itemStyle={{ color: "#fff" }}
                />
                <Bar dataKey="counter" color="#FFCE04" fill="#FFCE04" />
            </BarChart>
        </ResponsiveContainer>
    )
}