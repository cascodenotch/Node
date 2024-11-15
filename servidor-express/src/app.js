const express = require("express");
const cors = require("cors");
const errorHandling = require("./error/errorHandling");
const bookRoutes = require('./routes/bookRoutes');
const booksRoutes = require('./routes/arrayRoutes')

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware 
app.use((req, res, next) => {
    console.log("Petición recibida del cliente");
    console.log(`URL: ${req.url}`);
    console.log(`Método: ${req.method}`);
    console.log(`User-Agent: ${req.headers["user-agent"]}`);
    next();
});

app.get("/", (req, res) => {
    res.status(200).json({ ok: true, message: "Recibido!" });
});

app.get("/bye", (req, res) => {
    res.status(200).json({ ok: true, message: "Adios!" });
});

app.use('/api', bookRoutes);

app.use('/api/v2', booksRoutes);

app.use(errorHandling);

app.use((req, res, next) => {
    res.status(404).json({ error: true, codigo: 404, message: "Endpoint not found" });
});

module.exports = app;