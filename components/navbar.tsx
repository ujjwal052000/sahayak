"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sahayak</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition flex items-center gap-1">
                About Us
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Our Story
                </Link>
                <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Our Team
                </Link>
                <Link
                  href="/mission"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Mission & Vision
                </Link>
              </div>
            </div>

            {/* Our Work Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition flex items-center gap-1">
                Our Work
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/programs"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Our Programs
                </Link>
                <Link href="/impact" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Impact Stories
                </Link>
                <Link
                  href="/initiatives"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Initiatives
                </Link>
              </div>
            </div>

            {/* Get Involved Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition flex items-center gap-1">
                Get Involved
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/volunteer"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Volunteer
                </Link>
                <Link href="/donate" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Donate
                </Link>
                <Link
                  href="/partner"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            <Link href="/blogs" className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition">
              Blogs
            </Link>

            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition">
              Contact Us
            </Link>

            <Link href="/donate" className="px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition">
              Give
            </Link>
          </div>

          {/* Right side - CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/volunteer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2">
                Volunteer Now
                <span>↗</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700 hover:text-orange-600">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">
              Home
            </Link>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 flex items-center justify-between"
            >
              About Us
              <ChevronDown className={`w-4 h-4 transition ${openDropdown === "about" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "about" && (
              <div className="bg-orange-50">
                <Link href="/about" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Our Story
                </Link>
                <Link href="/team" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Our Team
                </Link>
                <Link href="/mission" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Mission & Vision
                </Link>
              </div>
            )}
            <button
              onClick={() => toggleDropdown("work")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 flex items-center justify-between"
            >
              Our Work
              <ChevronDown className={`w-4 h-4 transition ${openDropdown === "work" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "work" && (
              <div className="bg-orange-50">
                <Link href="/programs" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Our Programs
                </Link>
                <Link href="/impact" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Impact Stories
                </Link>
                <Link href="/initiatives" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Initiatives
                </Link>
              </div>
            )}
            <button
              onClick={() => toggleDropdown("involved")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 flex items-center justify-between"
            >
              Get Involved
              <ChevronDown className={`w-4 h-4 transition ${openDropdown === "involved" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "involved" && (
              <div className="bg-orange-50">
                <Link href="/volunteer" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Volunteer
                </Link>
                <Link href="/donate" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Donate
                </Link>
                <Link href="/partner" className="block px-8 py-2 text-gray-700 hover:text-orange-600">
                  Partner With Us
                </Link>
              </div>
            )}
            <Link href="/blogs" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">
              Blogs
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">
              Contact Us
            </Link>
            <Link href="/donate" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">
              Give
            </Link>
            <div className="px-4 py-4">
              <Link href="/volunteer" className="w-full">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  Volunteer Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
