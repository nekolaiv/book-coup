"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockBooks } from "@/lib/mock-data"
import { formatDate, calculateOverdueFee } from "@/lib/utils"
import { BookOpen, Calendar, AlertTriangle, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function MyBooksPage() {
  const [books, setBooks] = useState(mockBooks)

  // Filter books borrowed by current user
  const borrowedBooks = books.filter((book) => book.status === "borrowed" && book.borrowedBy === "Current User")

  const handleReturn = (bookId: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === bookId
          ? {
              ...book,
              status: "available" as const,
              borrowedBy: undefined,
              borrowedDate: undefined,
              dueDate: undefined,
            }
          : book,
      ),
    )

    const book = books.find((b) => b.id === bookId)
    toast.success(`"${book?.title}" has been returned to the library.`)
  }

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Books</h1>
        <p className="text-gray-600">Manage your currently borrowed books</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Books Borrowed</p>
                <p className="text-3xl font-bold text-gray-900">{borrowedBooks.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Slots</p>
                <p className="text-3xl font-bold text-gray-900">{2 - borrowedBooks.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue Books</p>
                <p className="text-3xl font-bold text-gray-900">
                  {borrowedBooks.filter((book) => book.dueDate && isOverdue(book.dueDate)).length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Currently Borrowed Books</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {borrowedBooks.length > 0 ? (
            <div className="space-y-4">
              {borrowedBooks.map((book) => {
                const overdue = book.dueDate && isOverdue(book.dueDate)
                const overdueFee = book.dueDate ? calculateOverdueFee(book.dueDate) : 0

                return (
                  <Card key={book.id} className={`border ${overdue ? "border-red-200 bg-red-50" : "border-gray-200"}`}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{book.title}</h3>
                          <p className="text-gray-600">by {book.author}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>{book.category}</span>
                            <span>•</span>
                            <span>ID: {book.id}</span>
                          </div>
                        </div>

                        <div className="flex flex-col md:items-end space-y-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">Due: {book.dueDate ? formatDate(book.dueDate) : "N/A"}</span>
                          </div>

                          {overdue && (
                            <div className="flex items-center space-x-2 text-red-600">
                              <AlertTriangle className="h-4 w-4" />
                              <span className="text-sm font-medium">Overdue Fee: ₱{overdueFee}</span>
                            </div>
                          )}

                          <Button
                            size="sm"
                            onClick={() => handleReturn(book.id)}
                            variant={overdue ? "destructive" : "default"}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Return Book
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">You haven&apos;t borrowed any books yet.</p>
              <p className="text-sm text-gray-400 mt-2">Visit the library to browse and borrow books.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}