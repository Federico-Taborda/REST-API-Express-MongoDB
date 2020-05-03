const express = require("express");
const bodyParser = require("body-parser");

// Conexion a MongoDB.
require("./connection");

// Modelo
const User = require("./models/user");

// CRUD
const newUser = require("./crud/create-user");
const queryUsers = require("./crud/query-users");
const queryUser = require("./crud/query-user");
const updateUser = require("./crud/update-user");
const deletUser = require("./crud/delete-user")

const app = express();
const port  = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Root endpoint
app.get("/", (req, res) => {
    res.json({"message": "Ok"});
});

// Consulta lista de usuarios
app.get("/api/users", (req, res) => {
    queryUsers.users()
        .then(data => res.send({"message": "Users List", "data": data}))
        .catch(err => res.send({"message": err}));
    });
    
// Consulta de usuario por nombre
app.get("/api/user/:username", (req, res) => {
    const { username } = req.params;
    queryUser.user(username)
        .then(user => res.send({"message": "User Finded", "user": user}))
        .catch(err => res.send({"message": err}));
    });
    
    // Crea un nuevo usuario
    app.post("/api/user", (req, res) => {
        const { username, password, email } = req.body;
        console.log(username, password, email)
    let errors = [];
    if(!password) errors.push("Contraseña no especificada");
    if(!email) errors.push("Email no especificado");
    if(errors.length) res.status(400).json({"error": errors.join(", ")});
    
    newUser.createUser(username, password, email);
    res.send({"message": "User Created"});
});

// Actualizar un usuario
app.patch("/api/user/:username", (req, res) => {
    const { name, password, email } = req.body;
    const { username } = req.params;
    
    updateUser.update(username, name, password, email)
        .then(user => res.send({"message": "User Updated", "user": user}))
        .catch(err => res.send({"message": err}));
});

// Eliminar un usuario
app.delete("/api/user/:username", (req, res) => {
    const { username } = req.params;
    deletUser.delete(username)
        .then(user => res.send({"message": "User Deleted", "user": user}))
        .catch(err => res.send({"message": err}));
});

// Servidor iniciado
app.listen(port, () => {
    console.log("Servidor en el puerto", port);
});
