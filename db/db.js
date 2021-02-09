const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://<username>:<password>@cluster0.uoixx.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  mongoose.connection.on("error", err => {
    console.log(err);
  });
  mongoose.connection.on("open", () => {
    console.log("Connection successful");
  });
