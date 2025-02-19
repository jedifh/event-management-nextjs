import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brown">
          EventEase
        </Link>
        <nav className="space-x-4">
          <Link href="/browse" className="text-brown-dark hover:text-brown">
            Browse Events
          </Link>
          <Link href="/contact" className="text-brown-dark hover:text-brown">
            Contact Us
          </Link>
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

