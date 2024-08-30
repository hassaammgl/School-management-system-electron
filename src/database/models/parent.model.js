// The **Parent Schema** stores information about the parents or guardians of the students.

// ```javascript
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ParentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  children: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
export default model("Parent", ParentSchema);
// ```

// #### **Explanation:**
// - **name**: Parent or guardian's name.
// - **email**: Unique email for the parent.
// - **phone**: Contact number.
// - **children**: List of references to the parent's children (students).
// - **address**: Parent's residential address.
// - **createdAt**: Timestamp when the parent's data was created.
