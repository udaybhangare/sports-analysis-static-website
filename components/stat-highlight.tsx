import { Card, CardContent } from "@/components/ui/card"

interface StatHighlightProps {
  title: string
  player: string
  value: string
  description: string
}

export default function StatHighlight({ title, player, value, description }: StatHighlightProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{player}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <div className="text-2xl font-bold">{value}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

