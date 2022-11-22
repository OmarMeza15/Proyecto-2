const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required."],
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
        ref: "Country"
    },
    date: {
        type: Date,
        trim: true,
    },
    text: {
        type: String,
        required: [true],
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    image: {
      type: String,
      required: [true, "image is required."],
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;