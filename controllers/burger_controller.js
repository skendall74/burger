var express = require("express");
//Route Express
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burger", function (req, res) {
  burgers.create(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
  
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition)
  
  burgers.update({
    devoured: req.body.devoured
  }, condition, function()  {
    res.redirect("/");
  });
});

module.exports = router;