"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Title */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CollabApp
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/lists"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Lists
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
