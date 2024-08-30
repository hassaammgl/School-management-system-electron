import mongoose from "mongoose";
import moment from "moment";
const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Super Admin", "Admin"],
    default: "Admin",
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  createdAt: {
    type: Date || String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a") || Date.now,
  },
  updatedAt: { type: Date || String, default: Date.now },
  lastLogin: [
    {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
  ],
});
export default model("Admin", AdminSchema);

// #### **Explanation:**
// - **name**: Admin's name.
// - **email**: Unique email for the admin.
// - **password**: Password for secure login.
// - **role**: Specifies the admin type: "Super Admin" or "Admin".
// - **createdAt**: Timestamp when the admin account was created.
// - **updatedAt**: Timestamp when the admin account was updated.
// - **lastLogin**: Array of timestamps when the admin last logged in.
