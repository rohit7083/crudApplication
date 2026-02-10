import Users from "./pages/UsersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-xl">
        User Management
      </header>
      <main className="py-6">
        <Users />
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
