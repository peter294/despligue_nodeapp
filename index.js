const express = require("express");
 
const app = express();
 
const PORT = process.env.PORT || 3000;
 
app.get("/", (req, res) => {
    res.json({
        mensaje: "Hola desde Node.js desplegado en Render, Mi nombre esgit Pedro Guzmán",
        ambiente: process.env.NODE_ENV || "development"
    });
});
 
app.get("/salud", (req, res) => {
    res.json({
        status: "OK"
    });
});
 
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});