"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

interface PlayerStatsRadarChartProps {
  player: any
}

export default function PlayerStatsRadarChart({ player }: PlayerStatsRadarChartProps) {
  const data = [
    { stat: "Points", value: player.stats.points, fullMark: 35 },
    { stat: "Rebounds", value: player.stats.rebounds, fullMark: 15 },
    { stat: "Assists", value: player.stats.assists, fullMark: 15 },
    { stat: "Steals", value: player.stats.steals, fullMark: 5 },
    { stat: "Blocks", value: player.stats.blocks, fullMark: 5 },
    { stat: "3PT%", value: player.stats.threePointPercentage * 100, fullMark: 100 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis angle={30} domain={[0, "auto"]} />
        <Radar />
        <PolarRadiusAxis angle={30} domain={[0, "auto"]} />
        <Radar
          name={player.name}
          dataKey="value"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

