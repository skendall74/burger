// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ";
    queryString += table;
    connection.query(queryString, function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO ";
    queryString += table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    console.log(vals);


    connection.query(queryString, vals, function (err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "Update " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  delete: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE " + condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      value = "'" + value + "'";
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}


module.exports = orm;