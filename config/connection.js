// =================================================================
// DEPENDENCIES
// Series of npm packages that give our server useful functionality
// =================================================================

// Set up MySQL connection.
const mysql = require("mysql");

// =================================================================
// MYSQL CONFIGURATION
// This sets up the basic properties for our SQL server
// =================================================================

// MySQL DB Connection Information
let connection 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgerMonster_db"
    });
}


// Initiate MySQL Connection.
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection