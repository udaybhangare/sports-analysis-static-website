import Link from "next/link"
import Image from "next/image"
import { Download, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import PlayerStatsRadarChart from "@/components/player-stats-radar-chart"
import PlayerCareerStats from "@/components/player-career-stats"
import PlayerGameLog from "@/components/player-game-log"
import { playersData } from "@/lib/data"

export default function PlayerPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  const player = playersData.find((p) => p.id === params.id) || playersData[0]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link href="/players" className="text-sm text-muted-foreground hover:underline">
                      Players
                    </Link>
                    <span className="text-sm text-muted-foreground">/</span>
                    <span className="text-sm">{player.name}</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{player.name}</h1>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{player.team}</Badge>
                    <Badge variant="outline">{player.position}</Badge>
                    <Badge variant="outline">#{player.jerseyNumber}</Badge>
                  </div>
                </div>
                <div className="grid gap-2 min-[400px]:grid-cols-3">
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <span className="text-sm font-medium text-muted-foreground">PPG</span>
                    <span className="text-2xl font-bold">{player.stats.points}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <span className="text-sm font-medium text-muted-foreground">RPG</span>
                    <span className="text-2xl font-bold">{player.stats.rebounds}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <span className="text-sm font-medium text-muted-foreground">APG</span>
                    <span className="text-2xl font-bold">{player.stats.assists}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download Stats
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Share Profile
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-lg border">
                  <Image src={player.imageSrc || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 md:w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="gamelog">Game Log</TabsTrigger>
                <TabsTrigger value="bio">Bio</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Player Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Height</p>
                            <p>{player.height}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Weight</p>
                            <p>{player.weight}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Age</p>
                            <p>{player.age}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Experience</p>
                            <p>{player.experience} years</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">College</p>
                            <p>{player.college}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Draft</p>
                            <p>{player.draft}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">About</p>
                          <p className="text-sm text-muted-foreground">{player.bio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex flex-col space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Radar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-square w-full">
                          <PlayerStatsRadarChart player={player} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="stats" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Career Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PlayerCareerStats player={player} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="gamelog" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Games</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PlayerGameLog player={player} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="bio" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Player Biography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{player.bio}</p>
                      <p>{player.extendedBio}</p>
                      <h3 className="text-lg font-semibold">Career Highlights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {player.careerHighlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

