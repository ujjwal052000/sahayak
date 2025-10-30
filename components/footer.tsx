import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Left Section - Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-xl mb-4">
                S
              </div>
              <h3 className="text-lg font-bold mb-3">Sahayak</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Sahayak is a leading Indian NGO, dedicated to promote education, community welfare, and environmental
              conservation with financial transparency.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
              Contact Us Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* About Us Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">About Us</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  CSR
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Intern
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Mission Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Our Values
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Us Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Join Us</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  NGOs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Corporate CSR
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Colleges
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-white text-slate-900 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4">Ready To Bring The Change. Let's Get To Work Now!</h4>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Donate For The Cause
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Address */}
          <div>
            <h5 className="font-semibold mb-3">Address</h5>
            <p className="text-gray-300 text-sm">
              3/2, Karpaga Vinayagar Koli Street, Alandur, Chennai – 600016, India
            </p>
          </div>

          {/* Call Us */}
          <div>
            <h5 className="font-semibold mb-3">Call Us</h5>
            <p className="text-gray-300 text-sm">
              <a href="tel:+918754413255" className="hover:text-orange-400 transition-colors">
                87544-13255
              </a>
            </p>
          </div>

          {/* Email Us */}
          <div>
            <h5 className="font-semibold mb-3">Email Us</h5>
            <p className="text-gray-300 text-sm">
              <a href="mailto:contact@sahayak.ngo" className="hover:text-orange-400 transition-colors">
                contact@sahayak.ngo
              </a>
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>Sahayak | Copyrights (c) All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
