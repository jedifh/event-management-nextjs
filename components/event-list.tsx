import { EventCard } from "./event-card"

interface Event {
  id: string
  title: string
  date: string
  description: string
}

interface EventListProps {
  events: Event[]
}

export function EventList({ events }: EventListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}

