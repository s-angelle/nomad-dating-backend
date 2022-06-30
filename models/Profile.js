const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    job: String,
    school: String,
    image: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    interests: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
