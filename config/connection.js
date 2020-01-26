const mysql = require("mysql");

let connection = null;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        connection = mysql.createConnection({
        host: "localhost",
        port: 3315,
        user: "root", 
        password: "#Tortas77!",
        database: "burgers_db"
});
}

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;