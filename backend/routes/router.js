const express = require("express");
const router = express.Router();
const schemas = require("../models/Schemas");

router.get("/admin", async (req, res) => {
  const courses = await schemas.Course.find();
  res.json(courses);
});

router.post("/admin", async (req, res) => {
  const newCourse = new schemas.Course(req.body);
  const savedCourse = await newCourse.save();
  res.json(savedCourse);
});

router.put("/admin/:id", async (req, res) => {
  const updatedCourse = await schemas.Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedCourse);
});

router.delete("/admin/:id", async (req, res) => {
  await schemas.Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted successfully" });
});

router.post("/register", async (req, res) => {
  const newUser = new schemas.User(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
});

module.exports = router;
