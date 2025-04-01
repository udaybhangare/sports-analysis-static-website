import Link from "next/link"
import Image from "next/image"
import { Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { playersData } from "@/lib/data"

export default function PlayersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Players</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Browse and search for detailed player statistics and information.
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
                      placeholder="Search players..."
                      className="w-full min-w-[260px] bg-background pl-8 shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Positions</SelectItem>
                      <SelectItem value="guard">Guards</SelectItem>
                      <SelectItem value="forward">Forwards</SelectItem>
                      <SelectItem value="center">Centers</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="grid" className="w-full">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-12 of 100 players</p>
                  <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="grid" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {playersData.slice(0, 12).map((player) => (
                      <Link key={player.id} href={`/players/${player.id}`}>
                        <Card className="overflow-hidden transition-all hover:shadow-md">
                          <div className="aspect-square relative">
                            <Image
                              src={player.imageSrc || "/placeholder.svg"}
                              alt={player.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-1">
                              <h3 className="font-semibold">{player.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {player.team} • {player.position}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-sm">
                              <span>{player.stats.points} PPG</span>
                              <span>{player.stats.rebounds} RPG</span>
                              <span>{player.stats.assists} APG</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="list" className="mt-6">
                  <div className="rounded-lg border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Team</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Position</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">PPG</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">RPG</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">APG</th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {playersData.slice(0, 12).map((player) => (
                            <tr
                              key={player.id}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">
                                <Link href={`/players/${player.id}`} className="font-medium hover:underline">
                                  {player.name}
                                </Link>
                              </td>
                              <td className="p-4 align-middle">{player.team}</td>
                              <td className="p-4 align-middle">{player.position}</td>
                              <td className="p-4 align-middle">{player.stats.points}</td>
                              <td className="p-4 align-middle">{player.stats.rebounds}</td>
                              <td className="p-4 align-middle">{player.stats.assists}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

