// The **Student Schema** captures details of each student, including their academic and personal information.

// ```javascript
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const StudentSchema = new Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  class: { type: Schema.Types.ObjectId, ref: "Class", required: true },
  parent: { type: Schema.Types.ObjectId, ref: "Parent", required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  healthRecords: [{ type: Schema.Types.ObjectId, ref: "HealthRecord" }],
  createdAt: { type: Date, default: Date.now },
});
export default model("Student", StudentSchema);
// ```

// #### **Explanation:**
// - **name**: Student's full name.
// - **rollNumber**: Unique roll number for each student.
// - **class**: Reference to the student's class.
// - **parent**: Reference to the parent entity.
// - **email**: Unique email for the student.
// - **dateOfBirth**: Student's date of birth.
// - **address**: Student's residential address.
// - **phone**: Contact phone number.
// - **healthRecords**: List of health records associated with the student.
// - **createdAt**: Timestamp when the student was registered.
