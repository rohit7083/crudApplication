export const userSchema = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    validate: (v) => v.length >= 2 || "Minimum 2 characters",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    validate: (v) => v.length >= 2 || "Minimum 2 characters",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    validate: (v) =>
      /^[0-9]{10}$/.test(v) || "Phone must be 10 digits",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Invalid email",
  },
];
