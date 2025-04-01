interface PlayerGameLogProps {
  player: any
}

export default function PlayerGameLog({ player }: PlayerGameLogProps) {
  return (
    <div className="rounded-lg border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Opponent</th>
              <th className="h-12 px-4 text-center align-middle font-medium">Result</th>
              <th className="h-12 px-4 text-right align-middle font-medium">MIN</th>
              <th className="h-12 px-4 text-right align-middle font-medium">PTS</th>
              <th className="h-12 px-4 text-right align-middle font-medium">REB</th>
              <th className="h-12 px-4 text-right align-middle font-medium">AST</th>
              <th className="h-12 px-4 text-right align-middle font-medium">STL</th>
              <th className="h-12 px-4 text-right align-middle font-medium">BLK</th>
              <th className="h-12 px-4 text-right align-middle font-medium">FG</th>
              <th className="h-12 px-4 text-right align-middle font-medium">3P</th>
              <th className="h-12 px-4 text-right align-middle font-medium">FT</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {player.recentGames.map((game: any) => (
              <tr
                key={game.date}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">{game.date}</td>
                <td className="p-4 align-middle">{game.opponent}</td>
                <td className="p-4 align-middle text-center">
                  <span className={game.result === "W" ? "text-green-500" : "text-red-500"}>
                    {game.result} {game.score}
                  </span>
                </td>
                <td className="p-4 align-middle text-right">{game.minutes}</td>
                <td className="p-4 align-middle text-right">{game.points}</td>
                <td className="p-4 align-middle text-right">{game.rebounds}</td>
                <td className="p-4 align-middle text-right">{game.assists}</td>
                <td className="p-4 align-middle text-right">{game.steals}</td>
                <td className="p-4 align-middle text-right">{game.blocks}</td>
                <td className="p-4 align-middle text-right">{game.fieldGoals}</td>
                <td className="p-4 align-middle text-right">{game.threePointers}</td>
                <td className="p-4 align-middle text-right">{game.freeThrows}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

