const [error, setError] = useState(null);

const loadUsers = async () => {
  setLoading(true);
  setError(null);

  try {
    const data = await getUsers();
    setUsers(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

const handleSave = async (data) => {
  setError(null);

  try {
    editingUser
      ? await updateUser(editingUser.id, data)
      : await createUser(data);

    setEditingUser(null);
    loadUsers();
  } catch (err) {
    setError(err.message);
  }
}