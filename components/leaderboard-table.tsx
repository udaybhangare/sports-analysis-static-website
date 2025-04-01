import { playersData } from "@/lib/data"

interface LeaderboardTableProps {
  category: string
}

export default function LeaderboardTable({ category }: LeaderboardTableProps) {
  // Sort players based on category
  const sortedPlayers = [...playersData]
    .sort((a, b) => {
      if (category === "Points Per Game") {
        return b.stats.points - a.stats.points
      } else if (category === "Rebounds Per Game") {
        return b.stats.rebounds - a.stats.rebounds
      } else if (category === "Assists Per Game") {
        return b.stats.assists - a.stats.assists
      } else {
        // Player Efficiency Rating
        const effA = a.stats.points + a.stats.rebounds + a.stats.assists + a.stats.steals + a.stats.blocks
        const effB = b.stats.points + b.stats.rebounds + b.stats.assists + b.stats.steals + b.stats.blocks
        return effB - effA
      }
    })
    .slice(0, 10)

  return (
    <div className="rounded-lg border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium">Rank</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Player</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Team</th>
              <th className="h-12 px-4 text-right align-middle font-medium">
                {category === "Points Per Game" && "PPG"}
                {category === "Rebounds Per Game" && "RPG"}
                {category === "Assists Per Game" && "APG"}
                {category === "Player Efficiency Rating" && "EFF"}
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {sortedPlayers.map((player, index) => {
              let statValue = 0
              if (category === "Points Per Game") {
                statValue = player.stats.points
              } else if (category === "Rebounds Per Game") {
                statValue = player.stats.rebounds
              } else if (category === "Assists Per Game") {
                statValue = player.stats.assists
              } else {
                // Player Efficiency Rating
                statValue =
                  player.stats.points +
                  player.stats.rebounds +
                  player.stats.assists +
                  player.stats.steals +
                  player.stats.blocks
              }

              return (
                <tr
                  key={player.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle font-medium">{index + 1}</td>
                  <td className="p-4 align-middle font-medium">{player.name}</td>
                  <td className="p-4 align-middle">{player.team}</td>
                  <td className="p-4 align-middle text-right">{statValue.toFixed(1)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

