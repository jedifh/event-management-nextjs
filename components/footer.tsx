import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-brown text-beige-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">EventEase</h3>
            <p>Making event management simple and elegant.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="hover:text-beige">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-beige">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-beige">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p>Follow us on social media for updates and special offers.</p>
            {/* Add social media icons here */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 EventEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

