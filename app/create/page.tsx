import { Header } from "@/components/header"
import { CreateEventForm } from "@/components/create-event-form"
import { Footer } from "@/components/footer"

export default function CreateEvent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
        <CreateEventForm />
      </main>
      <Footer />
    </div>
  )
}

