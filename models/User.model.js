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
      minLength: 6
    },
    dateOfBirth: {
      type: Date,
    },
    country: {
      type: String,
    },
    occupation: {
      type: String
    },
    profilePic: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
    },
    aboutUser: {
      type: String,
    },
    posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
    ]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
