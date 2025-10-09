// "use client";
// import { useAuth } from "../context/AuthContext";

// export default function Home() {
//   const { user, logout } = useAuth();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {user ? (
//         <>
//           <h1 className="text-2xl font-bold">Welcome, {user.name} 👋</h1>
//           <button
//             onClick={logout}
//             className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <a
//           href="/login"
//           className="text-blue-600 hover:underline text-lg font-semibold"
//         >
//           Go to Login
//         </a>
//       )}
//     </div>
//   );
// }
"use client";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {user ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Welcome, {user.name} 👋
          </h1>

          <div className="flex space-x-4">
            <a
              href="/lists"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Go to Lists
            </a>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <a
          href="/login"
          className="text-blue-600 hover:underline text-lg font-semibold"
        >
          Go to Login
        </a>
      )}
    </div>
  );
}
