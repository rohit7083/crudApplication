export default function InputField({ field, register, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {field.label}
      </label>

      <input
        type={field.type}
        {...register(field.name, {
          required: field.required,
          pattern: field.pattern,
        })}
        className={`w-full px-3 py-2 border rounded 
          ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
}
