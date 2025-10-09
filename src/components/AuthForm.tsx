"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  type: "login" | "register";
}

const AuthForm: React.FC<Props> = ({ type }) => {
  const { login, register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "register") await register(form);
    else await login(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center capitalize">
          {type}
        </h1>

        {type === "register" && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {type === "register" ? "Register" : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          {type === "register" ? (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
