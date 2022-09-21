const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // associative fields
    // profileURL
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        delete ret.password;
        // remove the password key from our returned document
        return ret;
      },
    },
    id: false,
  }
);

const User = mongoose.model("User", userSchema)

module.exports = User