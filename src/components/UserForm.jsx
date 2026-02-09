import { useForm } from "react-hook-form";
import { userSchema } from "../config/userSchema";

export default function UserForm({ onSubmit, initialData, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialData || {},
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      {userSchema.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium">
            {field.label}
          </label>
          <input
            type={field.type}
            {...register(field.name, {
              required: field.required,
              pattern: field.pattern,
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {field.label} is invalid
            </p>
          )}
        </div>
      ))}

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
