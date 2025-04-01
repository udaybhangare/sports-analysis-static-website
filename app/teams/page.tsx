import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { teamsData } from "@/lib/data"

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Teams</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Browse and search for team statistics and information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search teams..."
                      className="w-full min-w-[260px] bg-background pl-8 shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:w-auto">
                  <TabsTrigger value="all">All Teams</TabsTrigger>
                  <TabsTrigger value="east">Eastern</TabsTrigger>
                  <TabsTrigger value="west">Western</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamsData.map((team) => (
                      <Link key={team.id} href={`/teams/${team.id}`}>
                        <Card className="overflow-hidden transition-all hover:shadow-md">
                          <div className="aspect-video relative">
                            <Image
                              src={team.logoSrc || "/placeholder.svg"}
                              alt={team.name}
                              fill
                              className="object-contain p-4"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-1">
                              <h3 className="font-semibold">{team.name}</h3>
                              <p className="text-sm text-muted-foreground">{team.conference} Conference</p>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-sm">
                              <span>Record: {team.record}</span>
                              <span>Rank: {team.standing}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="east" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamsData
                      .filter((team) => team.conference === "Eastern")
                      .map((team) => (
                        <Link key={team.id} href={`/teams/${team.id}`}>
                          <Card className="overflow-hidden transition-all hover:shadow-md">
                            <div className="aspect-video relative">
                              <Image
                                src={team.logoSrc || "/placeholder.svg"}
                                alt={team.name}
                                fill
                                className="object-contain p-4"
                              />
                            </div>
                            <CardContent className="p-4">
                              <div className="space-y-1">
                                <h3 className="font-semibold">{team.name}</h3>
                                <p className="text-sm text-muted-foreground">{team.conference} Conference</p>
                              </div>
                              <div className="mt-2 flex items-center justify-between text-sm">
                                <span>Record: {team.record}</span>
                                <span>Rank: {team.standing}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="west" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamsData
                      .filter((team) => team.conference === "Western")
                      .map((team) => (
                        <Link key={team.id} href={`/teams/${team.id}`}>
                          <Card className="overflow-hidden transition-all hover:shadow-md">
                            <div className="aspect-video relative">
                              <Image
                                src={team.logoSrc || "/placeholder.svg"}
                                alt={team.name}
                                fill
                                className="object-contain p-4"
                              />
                            </div>
                            <CardContent className="p-4">
                              <div className="space-y-1">
                                <h3 className="font-semibold">{team.name}</h3>
                                <p className="text-sm text-muted-foreground">{team.conference} Conference</p>
                              </div>
                              <div className="mt-2 flex items-center justify-between text-sm">
                                <span>Record: {team.record}</span>
                                <span>Rank: {team.standing}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

