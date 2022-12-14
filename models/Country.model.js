const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const countrySchema = new Schema(
  {
    countryName: {
        type: String,
    },
    info: {
      type: String,
      required: [true, "info is required."],
      trim: true,
    },
    flagImg: {
      type: String,
    }
  },
  {
     // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
   }
);

const Country = model("Country", countrySchema);

module.exports = Country;
