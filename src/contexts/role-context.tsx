"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { UserRole } from "@/lib/types"

interface RoleContextType {
  role: UserRole
  setRole: (role: UserRole) => void
  userName: string
  setUserName: (name: string) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>("admin")
  const [userName, setUserName] = useState("Admin User")

  return <RoleContext.Provider value={{ role, setRole, userName, setUserName }}>{children}</RoleContext.Provider>
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider")
  }
  return context
}