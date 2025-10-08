"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { createList, updateList, getListById } from "../lib/api";
import { toast } from "react-hot-toast";

interface Props {
  listId?: string;
}

export default function ListForm({ listId }: Props) {
  const { token } = useAuth();
  const [form, setForm] = useState({ title: "", description: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchList = async () => {
      if (listId && token) {
        try {
          const res = await getListById(listId, token);
          setForm({
            title: res.data.title,
            description: res.data.description,
          });
        } catch {
          toast.error("Failed to load list data");
        }
      }
    };
    fetchList();
  }, [listId, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return toast.error("You must be logged in");

    try {
      if (listId) {
        await updateList(listId, form, token);
        toast.success("List updated");
      } else {
        await createList(form, token);
        toast.success("List created");
      }
      router.push("/lists");
    } catch {
      toast.error("Action failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {listId ? "Edit List" : "Create New List"}
        </h1>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          rows={4}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {listId ? "Update List" : "Create List"}
        </button>
      </form>
    </div>
  );
}
