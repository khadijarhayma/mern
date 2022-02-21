const express = require("express");
// initialisation
const productRouter = express.Router();
// add
// method POST
// path
// body {name,email,phone}
productRouter.post("/add", async (req, res) => {
  try {
  
    res.send({ result, msg: "sucefuly aded" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
module.exports =productRouter ;