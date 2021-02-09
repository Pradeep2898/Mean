const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://Pradeep2898:Rahul%409633@cluster0.uoixx.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  mongoose.connection.on("error", err => {
    console.log(err);
  });
  mongoose.connection.on("open", () => {
    console.log("Connection successful");
  });