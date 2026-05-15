import express from 'express';
import users from './MOCK_DATA.json' with { type: 'json' };
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.use(express.json());

app.post('/api/users/', (req, res) => {
    const body = req.body;

    const newUser = {
        ...body,
        id: users.length + 1
    };

    users.push(newUser);

    return res.status(201).json({ status: "Success", id: newUser.id });
});

app.get('/api/users', (req, res) => {
    return res.status(200).json(users);
});


app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).send("<h1>User Not Found!</h1><a href='/users'>Go Back</a>");
    }

    const html = `
        <h1>Name : ${user.first_name} ${user.last_name}</h1>
        <p>Email : ${user.email}</p>
        <p>Password : ${user.password}</p>
        <button onclick="location.href='/api/users/delete/${user.id}'">Delete User</button>
        <br><br><a href='/users'>Back to List</a>
    `;
    return res.send(html);
});

app.get('/api/users/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    users.splice(index, 1);
    return res.redirect('/users');
});

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>Name : ${user.first_name} ${user.last_name}</li>
                           <li>Email : ${user.email}</li>
                           <li>Password : ${user.password}</li>
                           <li><button onclick="location.href='/api/users/${user.id}'">View Details</button></li>
                           <br />
                           <li><button onclick="location.href='/api/users/delete/${user.id}'">Delete User</button></li>
                           <br />`).join('')}
    </ul>
    `;
    res.send(html);
});



app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});