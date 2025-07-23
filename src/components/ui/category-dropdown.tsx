"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BOOK_CATEGORIES } from "@/lib/types"

interface CategoryDropdownProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  includeAll?: boolean
}

export function CategoryDropdown({
  value,
  onValueChange,
  placeholder = "Select category",
  includeAll = false,
}: CategoryDropdownProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {includeAll && <SelectItem value="all">All Categories</SelectItem>}
        {BOOK_CATEGORIES.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}