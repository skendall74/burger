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

router.post("/", function(req,res)  {
  burgers.create([  
    "burgerName", "isEaten"
  ], [
    req.body.burger_name, 0
  ], function() {
    res.redirect("/");
  });
});
  
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition)
  
  burgers.update({
    isEaten: req.body.isEaten
  }, condition, function()  {
    res.redirect("/");
  });
});

router.delete("/:id", function(req,res) {
  var condition = "id = " + req.params.id;
  burgers.delete(condition,function() {
    res.redirect("/");
  });
});

module.exports = router;