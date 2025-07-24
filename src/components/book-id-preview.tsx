"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CategoryDropdown } from "@/components/ui/category-dropdown"
import { generateBookId } from "@/lib/utils"
import { Hash } from "lucide-react"

interface BookIdPreviewProps {
  title?: string
  publishDate?: string
  category?: string
  onIdGenerated?: (id: string) => void
}

export function BookIdPreview({ title = "", publishDate = "", category = "", onIdGenerated }: BookIdPreviewProps) {
  const [previewTitle, setPreviewTitle] = useState(title)
  const [previewDate, setPreviewDate] = useState(publishDate)
  const [previewCategory, setPreviewCategory] = useState(category)
  const [generatedId, setGeneratedId] = useState("")

  useEffect(() => {
    if (previewTitle && previewDate && previewCategory) {
      const id = generateBookId(previewTitle, previewDate, previewCategory, 1)
      setGeneratedId(id)
      onIdGenerated?.(id)
    } else {
      setGeneratedId("")
    }
  }, [previewTitle, previewDate, previewCategory, onIdGenerated])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Hash className="h-5 w-5" />
          <span>Book ID Preview</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="preview-title">Title</Label>
            <Input
              id="preview-title"
              value={previewTitle}
              onChange={(e) => setPreviewTitle(e.target.value)}
              placeholder="Enter book title"
            />
          </div>
          <div>
            <Label htmlFor="preview-date">Publish Date</Label>
            <Input id="preview-date" type="date" value={previewDate} onChange={(e) => setPreviewDate(e.target.value)} />
          </div>
          <div>
            <Label>Category</Label>
            <CategoryDropdown
              value={previewCategory}
              onValueChange={setPreviewCategory}
              placeholder="Select category"
            />
          </div>
        </div>

        <div className="mt-4">
          <Label>Generated ID</Label>
          <div className="mt-1 p-3 bg-gray-50 rounded-md border">
            <code className="text-sm font-mono">{generatedId || "TI-MON-DD-YYYY-CAT-00001"}</code>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Format: Title Initials - Month - Day - Year - Category - Serial Number
          </p>
        </div>
      </CardContent>
    </Card>
  )
}