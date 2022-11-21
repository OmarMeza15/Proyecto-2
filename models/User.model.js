const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "lastName is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required."],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required."],
    },
    birthday: {
      type: Date,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    post: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
