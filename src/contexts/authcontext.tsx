"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { UserRoleType, AuthContextProps } from "@/lib/types";

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  logout: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserRoleType | null>(null);
  const [isLoggedIn, setisLoggedIn] = useState(false)
    useEffect(() => {
        setisLoggedIn(!!user)
    }, [user])

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token");
        //redirect to login page

        window.location.href = '/login'
    }
  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
