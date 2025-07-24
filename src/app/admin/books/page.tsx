"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge } from "@/components/ui/status-badge"
import { CategoryDropdown } from "@/components/ui/category-dropdown"
import { mockBooks } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"
import { Search, Archive, BookOpen } from "lucide-react"
import { toast } from "sonner"

export default function BooksPage() {
  const [books, setBooks] = useState(mockBooks)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || book.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleArchive = (bookId: string) => {
    setBooks((prev) => prev.map((book) => (book.id === bookId ? { ...book, status: "archived" as const } : book)))

    const book = books.find((b) => b.id === bookId)
    toast.success(`"${book?.title}" has been archived successfully.`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Books Management</h1>
        <p className="text-gray-600">Manage your library book collection</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Book Collection</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search books by title, author, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full sm:w-48">
              <CategoryDropdown
                value={categoryFilter}
                onValueChange={setCategoryFilter}
                placeholder="Filter by category"
                includeAll
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Publish Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-mono text-sm">{book.id}</TableCell>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.category}</TableCell>
                    <TableCell>
                      <StatusBadge status={book.status} />
                    </TableCell>
                    <TableCell>{formatDate(book.publishDate)}</TableCell>
                    <TableCell>
                      {book.status !== "archived" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleArchive(book.id)}
                          className="text-orange-600 hover:text-orange-700"
                        >
                          <Archive className="h-4 w-4 mr-1" />
                          Archive
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-8">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No books found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}