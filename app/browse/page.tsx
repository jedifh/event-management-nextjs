"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import img1 from "../../assets/img1.webp"
import img2 from "../../assets/img2.webp"
import img3 from "../../assets/img3.webp"
import Image from "next/image"
import { events } from "@/lib/data"
export default function BrowseEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || event.category === selectedCategory),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brown mb-8">Browse Events</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">All Categories</option>
          <option value="Music">Music</option>
          <option value="Technology">Technology</option>
          <option value="Food">Food</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                height={20}
                width={20}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p>
                <strong>Category:</strong> {event.category}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/events/${event.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

