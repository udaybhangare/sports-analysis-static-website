import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface PlayerStatsCardProps {
  name: string
  team: string
  position: string
  imageSrc: string
  stats: {
    points: number
    rebounds: number
    assists: number
    steals: number
    blocks: number
  }
}

export default function PlayerStatsCard({ name, team, position, imageSrc, stats }: PlayerStatsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="space-y-1">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {team} • {position}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-xs text-muted-foreground">PTS</p>
            <p className="font-bold">{stats.points}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">REB</p>
            <p className="font-bold">{stats.rebounds}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">AST</p>
            <p className="font-bold">{stats.assists}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">STL</p>
            <p className="font-bold">{stats.steals}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">BLK</p>
            <p className="font-bold">{stats.blocks}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">EFF</p>
            <p className="font-bold">
              {(stats.points + stats.rebounds + stats.assists + stats.steals + stats.blocks).toFixed(1)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

