// =================================================================
// DEPENDENCIES
// Series of npm packages that give our server useful functionality
// =================================================================

// Set up MySQL connection.
var mysql = require("mysql");

// =================================================================
// MYSQL CONFIGURATION
// This sets up the basic properties for our SQL server
// =================================================================

// MySQL DB Connection Information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgerMonster_db"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection