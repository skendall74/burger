var orm = require("../config/orm.js");

var burgers = { 
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  }, 

  post: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  put: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }

};

module.exports = burgers;