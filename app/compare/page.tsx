"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PlayerComparisonChart from "@/components/player-comparison-chart"
import PlayerComparisonTable from "@/components/player-comparison-table"
import { playersData } from "@/lib/data"

export default function ComparePage() {
  const [player1, setPlayer1] = useState(playersData[0].id)
  const [player2, setPlayer2] = useState(playersData[1].id)

  const selectedPlayer1 = playersData.find((p) => p.id === player1) || playersData[0]
  const selectedPlayer2 = playersData.find((p) => p.id === player2) || playersData[1]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Player Comparison</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Compare any two players head-to-head across all statistical categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Players to Compare</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="player1" className="text-sm font-medium leading-none">
                      Player 1
                    </label>
                    <Select value={player1} onValueChange={setPlayer1}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select player" />
                      </SelectTrigger>
                      <SelectContent>
                        {playersData.map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.name} - {player.team}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="player2" className="text-sm font-medium leading-none">
                      Player 2
                    </label>
                    <Select value={player2} onValueChange={setPlayer2}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select player" />
                      </SelectTrigger>
                      <SelectContent>
                        {playersData.map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.name} - {player.team}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Compare Players</Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Statistical Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square w-full">
                    <PlayerComparisonChart player1={selectedPlayer1} player2={selectedPlayer2} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Head-to-Head Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <PlayerComparisonTable player1={selectedPlayer1} player2={selectedPlayer2} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

