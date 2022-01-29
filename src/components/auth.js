import React, { useState, createContext, useContext, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)


useEffect(() => {
  setUser(localStorage.getItem("userData"))

},[])

  const login = user => {
    setUser(user)
    localStorage.setItem("userData",user)

  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("userData")

  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
