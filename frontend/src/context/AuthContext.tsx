"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { loginUser, registerUser } from "../lib/api";
import { toast } from "react-hot-toast";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (data: any) => {
    try {
      const res = await loginUser(data);
      setUser(res.data);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Login successful");
      window.location.href = "/";
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const register = async (data: any) => {
    try {
      const res = await registerUser(data);
      setUser(res.data);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Registration successful");
      window.location.href = "/";
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
