import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../api/users";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { toast } from "react-toastify";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setUsers([]);
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      if (editingUser) {
        await updateUser(editingUser.id, data);
        toast.success("User updated successfully");
        setEditingUser(null);
      } else {
        await createUser(data);
        toast.success("User created successfully");
      }
      fetchUsers();
    } catch (err) {
      console.error(err);
      toast.error(editingUser ? "Failed to update user" : "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to delete user");
    }
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
