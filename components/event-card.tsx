import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  id: string
  title: string
  date: string
  description: string
}

export function EventCard({ id, title, date, description }: EventCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <Button className="mt-4">View Details</Button>
      </CardContent>
    </Card>
  )
}

