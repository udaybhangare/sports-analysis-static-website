interface PlayerCareerStatsProps {
  player: any
}

export default function PlayerCareerStats({ player }: PlayerCareerStatsProps) {
  return (
    <div className="rounded-lg border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium">Season</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Team</th>
              <th className="h-12 px-4 text-right align-middle font-medium">GP</th>
              <th className="h-12 px-4 text-right align-middle font-medium">MIN</th>
              <th className="h-12 px-4 text-right align-middle font-medium">PTS</th>
              <th className="h-12 px-4 text-right align-middle font-medium">REB</th>
              <th className="h-12 px-4 text-right align-middle font-medium">AST</th>
              <th className="h-12 px-4 text-right align-middle font-medium">STL</th>
              <th className="h-12 px-4 text-right align-middle font-medium">BLK</th>
              <th className="h-12 px-4 text-right align-middle font-medium">FG%</th>
              <th className="h-12 px-4 text-right align-middle font-medium">3P%</th>
              <th className="h-12 px-4 text-right align-middle font-medium">FT%</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {player.careerStats.map((season: any) => (
              <tr
                key={season.season}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">{season.season}</td>
                <td className="p-4 align-middle">{season.team}</td>
                <td className="p-4 align-middle text-right">{season.gamesPlayed}</td>
                <td className="p-4 align-middle text-right">{season.minutes.toFixed(1)}</td>
                <td className="p-4 align-middle text-right">{season.points.toFixed(1)}</td>
                <td className="p-4 align-middle text-right">{season.rebounds.toFixed(1)}</td>
                <td className="p-4 align-middle text-right">{season.assists.toFixed(1)}</td>
                <td className="p-4 align-middle text-right">{season.steals.toFixed(1)}</td>
                <td className="p-4 align-middle text-right">{season.blocks.toFixed(1)}</td>
                <td className="p-4 align-middle text-right">{(season.fieldGoalPercentage * 100).toFixed(1)}%</td>
                <td className="p-4 align-middle text-right">{(season.threePointPercentage * 100).toFixed(1)}%</td>
                <td className="p-4 align-middle text-right">{(season.freeThrowPercentage * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

