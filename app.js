const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
const app = express();
const routes = require("./routes/router");
const path = require("path");
const port = process.env.PORT || 3000;

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Pradeep2898:Rahul%409633@cluster0.uoixx.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("Successful connection");
//   client.close();
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/router", routes);
app.use(express.static(path.join(__dirname, "dist/mean")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mean/index.html'));
});

app.listen(port, () => console.log(`Listening on ${port}`));
