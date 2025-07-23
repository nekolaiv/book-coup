import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Calendar, DollarSign, Archive, Shield } from "lucide-react"

export function BorrowingPolicy() {
  const policies = [
    {
      icon: Shield,
      title: "Maximum Books",
      description: "Users can borrow up to 2 books at a time",
      color: "text-blue-600",
    },
    {
      icon: Calendar,
      title: "Borrow Period",
      description: "7 days borrowing period for all books",
      color: "text-green-600",
    },
    {
      icon: DollarSign,
      title: "Overdue Fee",
      description: "₱10 per day for overdue books",
      color: "text-red-600",
    },
    {
      icon: Archive,
      title: "Archived Books",
      description: "Archived books are not available for borrowing",
      color: "text-gray-600",
    },
    {
      icon: AlertCircle,
      title: "No Deletion",
      description: "Books cannot be deleted, only archived",
      color: "text-orange-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5" />
          <span>Borrowing Policy</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {policies.map((policy, index) => {
            const Icon = policy.icon
            return (
              <div key={index} className="flex items-start space-x-3">
                <Icon className={`h-5 w-5 mt-0.5 ${policy.color}`} />
                <div>
                  <h4 className="font-medium text-gray-900">{policy.title}</h4>
                  <p className="text-sm text-gray-600">{policy.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}