import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/crudDB");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);
// Create
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
// Read
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
// Update
app.put("/users/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});
// Delete
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
});
app.listen(4000, () => console.log("Server running on port 4000"));
