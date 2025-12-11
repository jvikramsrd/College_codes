import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/jwtauthdb");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("user", userSchema);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashed });
  res.send("User registered successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).send("User not found");
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(401).send("Invalid password");
  const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
});
// Middleware to verify token
function verifyToken(req, res, next) {
  const header = req.headers["authorization"];
  if (!header) return res.status(403).send("No token provided");
  const token = header.split(" ")[1];
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) return res.status(401).send("Unauthorized");
    req.userId = decoded.id;
    next();
  });
}
// Protected route
app.get("/dashboard", verifyToken, (req, res) => {
  res.send("Welcome to dashboard!");
});
app.listen(5000, () => console.log("Server running on port 5000"));
