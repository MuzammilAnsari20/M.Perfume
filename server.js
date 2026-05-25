import express from "express";
import mysql from "mysql2";
import cors from "cors";
import pusher from "./pusher.js";

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

app.get("/api/massages", (req, res) => {

    db.query("SELECT * FROM contactme", (err, rows) => {
        if (err) {
            return res.json({ error: err.message });
        }
        res.json(rows);
    }
    );

});

// ************************************************************
// Create
app.post("/api/create", (req, res) => {

    const { first_name, last_name, email, massage } = req.body;

    const insertQuery = `
        INSERT INTO contactme
        (first_name, last_name, email, massage)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        insertQuery,
        [first_name, last_name, email, massage],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    error: err.message
                });
            }

            // unread count fetch
            db.query(
                "SELECT COUNT(*) AS total FROM contactme WHERE is_read = 0",
                async (err2, rows) => {

                    if (err2) {
                        console.log(err2);

                        return res.status(500).json({
                            error: err2.message
                        });
                    }

                    const totalCount = rows[0].total;

                    console.log("📊 Count:", totalCount);

                    try {

                        const response = await pusher.trigger(
                            "notifications",
                            "message-unread",
                            {
                                type: "new_message",
                                count: Number(totalCount),
                            }
                        );

                        console.log("✅ PUSHER RESPONSE:", response);

                    } catch (pushError) {

                        console.log("❌ PUSHER ERROR:", pushError);

                    }

                    return res.json({
                        success: true,
                        count: totalCount
                    });

                }
            );

        }
    );

});

app.get("/api/messages/unread-count", (req, res) => {
    db.query("SELECT COUNT(*) AS total FROM contactme WHERE is_read = 0", (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ count: rows[0].total });
    });
});

app.put("/api/messages/read-all", (req, res) => {
    db.query("UPDATE contactme SET is_read = 1 WHERE is_read = 0", async (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        
        try {
            await pusher.trigger("notifications", "message-unread", {
                type: "read_all_messages",
                count: 0,
            });
        } catch (error) {
            console.log("Pusher Error:", error);
        }
        res.json({ success: true, count: 0 });
    });
});

app.put("/api/messages/read/:id", (req, res) => {
    db.query("UPDATE contactme SET is_read = 1 WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        
        db.query("SELECT COUNT(*) AS total FROM contactme WHERE is_read = 0", async (err2, rows) => {
            if (err2) return res.status(500).json({ error: err2.message });
            const totalCount = rows[0].total;
            try {
                await pusher.trigger("notifications", "message-unread", {
                    type: "read_message",
                    count: Number(totalCount),
                });
            } catch (error) {
                console.log("Pusher Error:", error);
            }
            res.json({ success: true, count: totalCount });
        });
    });
});
// ************************************************************
app.delete("/api/delete/:id", (req, res) => {
    db.query("DELETE FROM contactme WHERE id = ?", [req.params.id], (err, rows) => {
        if (err) { return res.json({ error: err.message }); }
        
        db.query("SELECT COUNT(*) AS total FROM contactme WHERE is_read = 0", async (err2, rows2) => {
            if (!err2) {
                const totalCount = rows2[0].total;
                try {
                    await pusher.trigger("notifications", "message-unread", {
                        type: "delete_message",
                        count: Number(totalCount),
                    });
                } catch (error) {
                    console.log("Pusher Error:", error);
                }
            }
            res.json(rows);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});