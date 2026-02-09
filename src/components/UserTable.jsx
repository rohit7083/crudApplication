import { userSchema } from "../config/userSchema";

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <table className="w-full border mt-6">
      <thead>
        <tr>
          {userSchema.map((field) => (
            <th key={field.name} className="border p-2">
              {field.label}
            </th>
          ))}
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            {userSchema.map((field) => (
              <td key={field.name} className="border p-2">
                {user[field.name]}
              </td>
            ))}
            <td className="border p-2 space-x-2">
              <button
                onClick={() => onEdit(user)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
