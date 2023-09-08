const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()

const Student = require("../models/Student");

// CREATE Student
router.post("/create-student", (req, res, next) => {
Student.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Students
router.get("/", (req, res) => {
Student.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE student
router
.route("/update-student/:id")

// Get Single Student
.get((req, res) => {
	Student.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Student Data
.put((req, res, next) => {
	Student.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Student updated successfully !");
		}
	}
	);
});

// Delete Student
router.delete("/delete-student/:id",
(req, res, next) => {
Student.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
