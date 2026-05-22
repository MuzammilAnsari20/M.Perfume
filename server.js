import express from "express";
import mysql from "mysql2";
import cors from "cors";
import pusher from "./AdminLayout/components/pusher";

const app = express();
app.use(express.json());
const PORT = 8000;

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mPerfume"
})

// Read
app.get("/api/massages",(req,res) => {
    db.query("SELECT * FROM contactme WHERE is_read = false", async (err, rows) => {
        if(err){
              await pusher.trigger('notifications', 'message-unread', { message: 'unread' });
        }    
        return res.json( { error: err.message} );
        res.json(rows);
    })
})

// Create
app.post("/api/create",(req,res) => {
    const {first_name, last_name, email, massage} = req.body;
    db.query("INSERT INTO `contactme`(`first_name`, `last_name`, `email`, `massage`) VALUES (?,?,?,?)", [first_name, last_name, email, massage] , (err, result) => {
        if(err) return res.json( { error: err.message} );
        res.json({id: result.insertId, first_name: first_name, last_name: last_name, email: email, massage: massage});
    })
})

app.delete("/api/delete/:id", (req, res) => {
    db.query("DELETE FROM contactme WHERE id = ?",[req.params.id],(err, rows) => {
            if (err) {return res.json({error: err.message});}
            res.json(rows);
        });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});