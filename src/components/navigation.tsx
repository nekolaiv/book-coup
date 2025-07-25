"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useRole } from "@/contexts/role-context"
import { BookOpen, Users, Plus, BarChart3, Library, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const { role, setRole, userName } = useRole()
  const pathname = usePathname()

  const adminNavItems = [
    { href: "/admin", label: "Dashboard", icon: BarChart3 },
    { href: "/admin/books", label: "Books", icon: BookOpen },
    { href: "/admin/add-book", label: "Add Book", icon: Plus },
    { href: "/admin/borrowers", label: "Borrowers", icon: Users },
  ]

  const userNavItems = [
    { href: "/library", label: "Library", icon: Library },
    { href: "/my-books", label: "My Books", icon: User },
  ]

  const navItems = role === "admin" ? adminNavItems : userNavItems

  const toggleRole = () => {
    setRole(role === "admin" ? "user" : "admin")
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={role === "admin" ? "/admin" : "/library"} className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Book Coup</span>
            </Link>

            <div className="hidden md:ml-8 md:flex md:space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Go to</span>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
