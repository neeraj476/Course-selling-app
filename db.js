const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// User schema
const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

// Admin schema
const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

// Course schema
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    creatorId: { type: ObjectId, ref: "admin" }, // References the Admin model
});

// Purchase schema
const purchaseSchema = new Schema({
    userId: { type: ObjectId, ref: "user" }, // References the User model
    courseId: { type: ObjectId, ref: "course" }, // References the Course model
});

// Models
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
