import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateBookId(title: string, publishDate: string, category: string, serialNumber: number): string {
  const titleInitials = title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2)

  const date = new Date(publishDate)
  const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
  const day = date.getDate().toString().padStart(2, "0")
  const year = date.getFullYear()

  const categoryCode = category.substring(0, 3).toUpperCase()
  const serial = serialNumber.toString().padStart(5, "0")

  return `${titleInitials}-${month}-${day}-${year}-${categoryCode}-${serial}`
}

export function calculateOverdueFee(dueDate: string): number {
  const due = new Date(dueDate)
  const today = new Date()
  const diffTime = today.getTime() - due.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays > 0 ? diffDays * 10 : 0
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
