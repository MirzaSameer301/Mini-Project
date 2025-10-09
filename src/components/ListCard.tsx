"use client";
import { useRouter } from "next/router";
import { deleteList } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

interface Props {
  list: any;
  refresh: () => void;
}

export default function ListCard({ list, refresh }: Props) {
  const { token } = useAuth();
  const router = useRouter();

  const handleDelete = async () => {
    if (!token) return toast.error("Unauthorized");
    try {
      await deleteList(list._id, token);
      toast.success("Deleted successfully");
      refresh();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 border flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{list.title}</h3>
        <p className="text-gray-600 mt-1">{list.description}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => router.push(`/lists/${list._id}`)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
