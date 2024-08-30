import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Super Admin", "Admin"], default: "Admin" },
  createdAt: { type: Date, default: Date.now },
});
export default model("Admin", AdminSchema);

// #### **Explanation:**
// - **name**: Admin's name.
// - **email**: Admin's email, unique across all admins.
// - **password**: Password for secure login.
// - **role**: Specifies the admin type: "Super Admin" or "Admin".
// - **createdAt**: Timestamp when the admin account was created.
