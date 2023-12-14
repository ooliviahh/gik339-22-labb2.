// Uppgift 2 Skapa webbserver och första route:

//2.1:
const express = require("express");
//2.2:
const server = express();

//Uppgift 3 Använd sqlite3 för att kommuicera med databas:
const sqlite3 = require("sqlite3").verbose();

//2.3:
server
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});

//2.4:
server.listen(3000, () => { 
    console.log('Server running on localhost:3000.');
});

//2.5 +  2.6 + 3:
server.get("/users", (req, res) => {
    const db = new sqlite3.Database("./gik339-labb2.db");
    const sql = "SELECT * FROM users";

    db.all(sql, (err, rows ) => {
        if (err) {
            res.status(500, "Error, något blev fel").send(err);
        } else {
            res.send(rows);
        }
    });
   
});


