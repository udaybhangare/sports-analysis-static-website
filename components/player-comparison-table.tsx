interface PlayerComparisonTableProps {
  player1: any
  player2: any
}

export default function PlayerComparisonTable({ player1, player2 }: PlayerComparisonTableProps) {
  const stats = [
    { name: "Points Per Game", value1: player1.stats.points, value2: player2.stats.points },
    { name: "Rebounds Per Game", value1: player1.stats.rebounds, value2: player2.stats.rebounds },
    { name: "Assists Per Game", value1: player1.stats.assists, value2: player2.stats.assists },
    { name: "Steals Per Game", value1: player1.stats.steals, value2: player2.stats.steals },
    { name: "Blocks Per Game", value1: player1.stats.blocks, value2: player2.stats.blocks },
    {
      name: "Field Goal %",
      value1: player1.stats.fieldGoalPercentage * 100,
      value2: player2.stats.fieldGoalPercentage * 100,
    },
    {
      name: "Three Point %",
      value1: player1.stats.threePointPercentage * 100,
      value2: player2.stats.threePointPercentage * 100,
    },
    {
      name: "Free Throw %",
      value1: player1.stats.freeThrowPercentage * 100,
      value2: player2.stats.freeThrowPercentage * 100,
    },
    { name: "Minutes Per Game", value1: player1.stats.minutes, value2: player2.stats.minutes },
    { name: "Games Played", value1: player1.stats.gamesPlayed, value2: player2.stats.gamesPlayed },
  ]

  return (
    <div className="rounded-lg border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium">Statistic</th>
              <th className="h-12 px-4 text-right align-middle font-medium">{player1.name}</th>
              <th className="h-12 px-4 text-right align-middle font-medium">{player2.name}</th>
              <th className="h-12 px-4 text-center align-middle font-medium">Difference</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {stats.map((stat) => {
              const diff = stat.value1 - stat.value2
              const isPercentage = stat.name.includes("%")

              return (
                <tr
                  key={stat.name}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle font-medium">{stat.name}</td>
                  <td className="p-4 align-middle text-right">
                    {isPercentage ? stat.value1.toFixed(1) + "%" : stat.value1.toFixed(1)}
                  </td>
                  <td className="p-4 align-middle text-right">
                    {isPercentage ? stat.value2.toFixed(1) + "%" : stat.value2.toFixed(1)}
                  </td>
                  <td className="p-4 align-middle text-center">
                    <span className={diff > 0 ? "text-green-500" : diff < 0 ? "text-red-500" : ""}>
                      {diff > 0 ? "+" : ""}
                      {isPercentage ? diff.toFixed(1) + "%" : diff.toFixed(1)}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

