var orm = require("../config/orm.js");

var burgerEat = {
  all: function (cb) {
    orm.all("burgerEat", function (res) {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    orm.create("burgerEat", cols, vals, function (res) {
      cb(res);
    });
  },

  update: function (objColVals, condition, cb) {
    orm.update("burgerEat", objColVals, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete("burgerEat", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burgerEat;