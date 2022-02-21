const express = require("express");
// initialisation
const contactRouter = express.Router();
// add
// method POST
// path
// body {name,email,phone}
contactRouter.post("/add", async (req, res) => {
  try {
    let newContact = new contact({ ...req.body });
    let result = await newContact.save();
    res.send({ result, msg: "sucefuly aded" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// findone by id
// method GET
// path
// body {name,email,phone}
contactRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    let result = await contact.findOne({ _id: req.params.id });
    res.send({ result, msg: " ONE users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// update
// method PUT
// path
// body {name,email,phone}
contactRouter.put("/:id", async (req, res) => {
  try {
    let result = await contact.findOneAndUpdate({
      _id: req.params.id,
      $set: { ...req.body },
    });
    res.send({ result, msg: " ONE users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// delete
// method delete
// path
// body {name,email,phone}
contactRouter.delete("/:id", async (req, res) => {
  try {
    let result = await contact.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = contactRouter;







