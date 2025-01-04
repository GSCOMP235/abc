const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  faculty: { type: String, required: true },
  indexNumber: { type: String, required: true },
});

const Course = mongoose.model("Course", courseSchema, "courses");
const User = mongoose.model("User", userSchema, "user");
const mySchemas = { Course: Course, User: User };
module.exports = mySchemas;
