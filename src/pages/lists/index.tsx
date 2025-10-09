"use client";
import { useEffect, useState } from "react";
import { getLists } from "../../lib/api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import ListCard from "../../components/ListCard";
import { useRouter } from "next/router";

export default function ListsPage() {
  const { token } = useAuth();
  const [lists, setLists] = useState<any[]>([]);
  const router = useRouter();

  const fetchLists = async () => {
    if (!token) return;
    try {
      const res = await getLists(token);
      setLists(res.data);
    } catch {
      toast.error("Failed to fetch lists");
    }
  };

  useEffect(() => {
    fetchLists();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Lists</h1>
        <button
          onClick={() => router.push("/lists/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New List
        </button>
      </div>

      <div className="grid gap-4">
        {lists.length > 0 ? (
          lists.map((list) => (
            <ListCard key={list._id} list={list} refresh={fetchLists} />
          ))
        ) : (
          <p className="text-gray-500">No lists found. Create one!</p>
        )}
      </div>
    </div>
  );
}
