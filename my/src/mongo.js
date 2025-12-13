import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json());

mongoose.connect