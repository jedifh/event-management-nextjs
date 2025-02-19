import { Button } from "@/components/ui/button"
import { events } from "@/lib/data"
import Image from "next/image";

// Mock function to fetch event details
function getEventDetails(id: string) {
  return events.find(event => event.id === id) || {
    id: "1",
    title: "Summer Music Festival",
    date: "2025-07-15",
    description: "A day of live music and fun in the sun!",
    category: "Music",
    location: "Central Park",
    image: "./lol",
    price:"$75"
  };
}

export default function EventDetails({ params }: { params: { id: string } }) {
  const event = getEventDetails(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brown mb-4">{event.title}</h1>
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          height={20}
          width={20}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Date & Time</h2>
            <p>{event.date}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p>{event.location}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Price</h2>
            <p>{event.price}</p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
          <p className="text-gray-700">{event.description}</p>
        </div>
        <Button size="lg">Book Now</Button>
      </div>
    </div>
  )
}

