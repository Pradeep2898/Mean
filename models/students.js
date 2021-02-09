const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  studId: {
    type: Number,
    required: true
  },
  versionKey: {
    select: false       //used to remove __v from mongoose data, but seems its not working
  }
});

module.exports = mongoose.model("Students", studentsSchema);
