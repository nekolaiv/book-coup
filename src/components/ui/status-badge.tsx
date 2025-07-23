import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: string
  variant?: "default" | "success" | "warning" | "destructive"
}

export function StatusBadge({ status, variant = "default" }: StatusBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "destructive":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "success"
      case "borrowed":
      case "active":
        return "warning"
      case "archived":
      case "suspended":
      case "overdue":
        return "destructive"
      default:
        return "default"
    }
  }

  const actualVariant = variant === "default" ? getStatusVariant(status) : variant

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        getVariantStyles(),
      )}
    >
      {status}
    </span>
  )
}