export const userSchema = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: "First name is required",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: "Last name is required",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: "Phone is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Phone must be 10 digits",
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: "Email is required",
  },
];
