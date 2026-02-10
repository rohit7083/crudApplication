import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userSchema } from "../config/userSchema";
import InputField from "./InputField";

export default function UserForm({ onSubmit, initialData, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({});
    }
  }, [initialData, reset]);

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    if (!initialData) {
      reset({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Update User" : "Create User"}
      </h2>

      {userSchema.map((field) => (
        <InputField
          key={field.name}
          field={field}
          register={register}
          error={errors[field.name]}
        />
      ))}

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : initialData ? "Update" : "Create"}
      </button>
    </form>
  );
}
