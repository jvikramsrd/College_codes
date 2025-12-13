import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/embeddedDB");
const subjectSchema = new mongoose.Schema({
  name: String,
  marks: Number,
});
const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  subjects: [subjectSchema],
});
const Student = mongoose.model("Student", studentSchema);
(async () => {
  await Student.create({
    name: "Alice",
    rollNo: 101,
    subjects: [
      { name: "React", marks: 90 },
      { name: "Node.js", marks: 88 },
    ],
  });
  console.log(await Student.find());
})();
