import Link from "next/link"
import { Header } from "@/components/header"
import { EventList } from "@/components/event-list"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const events = [
  {
    id: "1",
    title: "Summer Music Festival",
    date: "2025-07-15",
    description: "A day of live music and fun in the sun!",
  },
  {
    id: "2",
    title: "Tech Conference 2025",
    date: "2025-09-22",
    description: "Learn about the latest in technology and innovation.",
  },
  {
    id: "3",
    title: "Food & Wine Expo",
    date: "2025-11-05",
    description: "Taste cuisines from around the world and sample fine wines.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-beige py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brown mb-4">Discover Amazing Events</h1>
            <p className="text-xl text-brown-dark mb-8">Find and book your next unforgettable experience</p>
            <Button asChild size="lg">
              <Link href="/browse">Browse Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
        <EventList events={events} />
      </main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brown mb-8 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{/* Add featured event cards here */}</div>
        </div>
      </section>

      <section className="bg-brown-light text-beige-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose EventEase?</h2>
            <p className="text-xl mb-8">We make event discovery and booking simple, elegant, and enjoyable.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Wide Selection</h3>
                <p>Discover events for every interest and occasion.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Easy Booking</h3>
                <p>Secure your spot with just a few clicks.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Exceptional Support</h3>
                <p>Our team is here to assist you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

