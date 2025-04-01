import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PlayerStatsCard from "@/components/player-stats-card"
import LeaderboardTable from "@/components/leaderboard-table"
import StatHighlight from "@/components/stat-highlight"
import PerformanceChart from "@/components/performance-chart"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sports Data Analysis
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover player statistics, comparisons, and rankings in an easy-to-navigate platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/players">
                    <Button size="lg">Explore Players</Button>
                  </Link>
                  <Link href="/teams">
                    <Button size="lg" variant="outline">
                      View Teams
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px]">
                  <PerformanceChart />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Search Players & Teams</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Find detailed statistics for any player or team in our database.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search players or teams..."
                    className="w-full bg-background pl-8 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Players</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Check out these top performers from around the league.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <PlayerStatsCard
                  name="LeBron James"
                  team="Los Angeles Lakers"
                  position="Forward"
                  imageSrc="/placeholder.svg?height=300&width=300"
                  stats={{
                    points: 27.3,
                    rebounds: 7.4,
                    assists: 8.3,
                    steals: 1.3,
                    blocks: 0.8,
                  }}
                />
                <PlayerStatsCard
                  name="Kevin Durant"
                  team="Phoenix Suns"
                  position="Forward"
                  imageSrc="/placeholder.svg?height=300&width=300"
                  stats={{
                    points: 29.1,
                    rebounds: 6.7,
                    assists: 5.0,
                    steals: 0.7,
                    blocks: 1.1,
                  }}
                />
                <PlayerStatsCard
                  name="Stephen Curry"
                  team="Golden State Warriors"
                  position="Guard"
                  imageSrc="/placeholder.svg?height=300&width=300"
                  stats={{
                    points: 29.4,
                    rebounds: 6.1,
                    assists: 6.3,
                    steals: 0.9,
                    blocks: 0.2,
                  }}
                />
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/players">
                  <Button variant="outline">View All Players</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Leaderboards</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  See who's leading the league in various statistical categories.
                </p>
              </div>
              <div className="w-full">
                <Tabs defaultValue="points" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="points">Points</TabsTrigger>
                    <TabsTrigger value="rebounds">Rebounds</TabsTrigger>
                    <TabsTrigger value="assists">Assists</TabsTrigger>
                    <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                  </TabsList>
                  <TabsContent value="points" className="mt-6">
                    <LeaderboardTable category="Points Per Game" />
                  </TabsContent>
                  <TabsContent value="rebounds" className="mt-6">
                    <LeaderboardTable category="Rebounds Per Game" />
                  </TabsContent>
                  <TabsContent value="assists" className="mt-6">
                    <LeaderboardTable category="Assists Per Game" />
                  </TabsContent>
                  <TabsContent value="efficiency" className="mt-6">
                    <LeaderboardTable category="Player Efficiency Rating" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Key Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Season Highlights</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Explore the most impressive statistical performances of the current season.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <StatHighlight
                    title="Highest Scoring Game"
                    player="Joel Embiid"
                    value="70 pts"
                    description="vs. San Antonio Spurs"
                  />
                  <StatHighlight
                    title="Most Assists in a Game"
                    player="Tyrese Haliburton"
                    value="23 ast"
                    description="vs. New York Knicks"
                  />
                  <StatHighlight
                    title="Most Rebounds in a Game"
                    player="Domantas Sabonis"
                    value="26 reb"
                    description="vs. Minnesota Timberwolves"
                  />
                  <StatHighlight
                    title="Most Steals in a Game"
                    player="Alex Caruso"
                    value="7 stl"
                    description="vs. Portland Trail Blazers"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Player Comparison Tool</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Compare any two players head-to-head across all statistical categories.
                    </p>
                    <div className="mt-4 grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="player1" className="text-sm font-medium leading-none">
                            Player 1
                          </label>
                          <Input id="player1" placeholder="Select player..." />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="player2" className="text-sm font-medium leading-none">
                            Player 2
                          </label>
                          <Input id="player2" placeholder="Select player..." />
                        </div>
                      </div>
                      <Link href="/compare">
                        <Button className="w-full">Compare Players</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

