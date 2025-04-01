"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

interface PlayerComparisonChartProps {
  player1: any
  player2: any
}

export default function PlayerComparisonChart({ player1, player2 }: PlayerComparisonChartProps) {
  const data = [
    {
      stat: "Points",
      [player1.name]: player1.stats.points,
      [player2.name]: player2.stats.points,
      fullMark: 35,
    },
    {
      stat: "Rebounds",
      [player1.name]: player1.stats.rebounds,
      [player2.name]: player2.stats.rebounds,
      fullMark: 15,
    },
    {
      stat: "Assists",
      [player1.name]: player1.stats.assists,
      [player2.name]: player2.stats.assists,
      fullMark: 15,
    },
    {
      stat: "Steals",
      [player1.name]: player1.stats.steals,
      [player2.name]: player2.stats.steals,
      fullMark: 5,
    },
    {
      stat: "Blocks",
      [player1.name]: player1.stats.blocks,
      [player2.name]: player2.stats.blocks,
      fullMark: 5,
    },
    {
      stat: "3PT%",
      [player1.name]: player1.stats.threePointPercentage * 100,
      [player2.name]: player2.stats.threePointPercentage * 100,
      fullMark: 100,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis angle={30} domain={[0, "auto"]} />
        <Radar
          name={player1.name}
          dataKey={player1.name}
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
        <Radar
          name={player2.name}
          dataKey={player2.name}
          stroke="hsl(var(--destructive))"
          fill="hsl(var(--destructive))"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

