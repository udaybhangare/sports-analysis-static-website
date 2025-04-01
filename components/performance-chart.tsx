"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", points: 26.7, assists: 7.4, rebounds: 8.2 },
  { month: "Feb", points: 28.3, assists: 8.1, rebounds: 7.9 },
  { month: "Mar", points: 29.5, assists: 7.8, rebounds: 8.5 },
  { month: "Apr", points: 27.2, assists: 9.2, rebounds: 7.6 },
  { month: "May", points: 30.1, assists: 8.7, rebounds: 9.0 },
  { month: "Jun", points: 31.4, assists: 8.3, rebounds: 8.8 },
]

export default function PerformanceChart() {
  return (
    <ChartContainer
      config={{
        points: {
          label: "Points",
          color: "hsl(var(--chart-1))",
        },
        assists: {
          label: "Assists",
          color: "hsl(var(--chart-2))",
        },
        rebounds: {
          label: "Rebounds",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="points"
            stroke="var(--color-points)"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="assists"
            stroke="var(--color-assists)"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="rebounds"
            stroke="var(--color-rebounds)"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

