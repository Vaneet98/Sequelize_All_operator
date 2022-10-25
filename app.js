const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = 8080;
const rout = require("./router/userRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("welcome to Home page");
});

//user of router file
app.use("/", rout);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
