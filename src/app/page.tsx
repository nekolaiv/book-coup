"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useRole } from "@/contexts/role-context"
import { BookOpen } from "lucide-react"

export default function HomePage() {
  const { role } = useRole()
  const router = useRouter()

  useEffect(() => {
    // Redirect based on role
    if (role === "admin") {
      router.push("/admin")
    } else {
      router.push("/library")
    }
  }, [role, router])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Book Coup</h1>
        <p className="text-gray-600">Loading your library dashboard...</p>
      </div>
    </div>
  )
}