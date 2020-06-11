// =================================================================
// DEPENDENCIES
// =================================================================

// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
printQuestionMarks = (num) => {
  const arr = [];
  for (const i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
objToSql = (ob) => {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    const value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Chili Burger => 'Chili Burger')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Chili Burger'} => ["name='Chili Burger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
  all: (tableInput, cb) => {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, cols, vals, cb) => {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`
    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {burger_name: cheeseburger, devoured: true}
  update: (table, objColVals, condition, cb) => {
    var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: (table, condition, cb) => {
    var queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
