import { useEffect, useState } from "react";
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from "../api/users";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
    setLoading(true);
    if (editingUser) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      await createUser(data);
    }
    setLoading(false);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <UserForm
        onSubmit={handleSubmit}
        initialData={editingUser}
        loading={loading}
      />
      <UserTable
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDelete}
      />
    </div>
  );
}
