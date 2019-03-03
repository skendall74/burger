var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerCon = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgerCon.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burgerCon.create(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burgerCon.update({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});