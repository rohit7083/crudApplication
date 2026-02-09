import Users from "./pages/UsersPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
        User Management
      </header>

      <main className="py-6">
        <Users />
      </main>
    </div>
  );
}

export default App;
