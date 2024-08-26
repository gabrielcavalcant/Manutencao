"use client";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { equipes: "academia", manutencoes: 275, fill: "hsl(var(--foreground))" },
  { equipes: "allianz", manutencoes: 200, fill: "hsl(var(--foreground))" },
  { equipes: "parque", manutencoes: 187, fill: "hsl(var(--foreground))" },
  { equipes: "jogadores", manutencoes: 173, fill: "hsl(var(--foreground))" },
  { equipes: "comissao", manutencoes: 90, fill: "hsl(var(--foreground))" },
];

const chartConfig = {
  manutencoes: {
    label: "manutenções realizadas",
  },
  academia: {
    label: "Academia de Futebol",
  },
  allianz: {
    label: "Allianz Parque",
  },
  parque: {
    label: "Parque Antártica",
  },
  jogadores: {
    label: "Jogadores",
  },
  comissao: {
    label: "Comissão Técnica",
  },
} satisfies ChartConfig;

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded-md text-sm text-black">
        <p className="mb-1">{payload[0].payload.month}</p>
        <p>
          <span className="font-semibold">{chartConfig.manutencoes.label}</span>
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export function ChartBarComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatório de Manutenções</CardTitle>
        <CardDescription>
          Realizados por cada Setor do Palmeiras
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            width={500}
            height={300}
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              top: 20,
              right: 30,
              left: 80,
              bottom: 20,
            }}
          >
            <YAxis
              dataKey="equipes"
              type="category"
              tickLine={false}
              tickMargin={15}
              axisLine={false}
              width={150}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="manutencoes" type="number" hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="manutencoes" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
