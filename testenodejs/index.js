const express = require("express");
const server = express();



server.get("/oi", (req, res) => {
    const {nome,idade} = req.query;

    return res.json({ 
        title: "Glória Deus!",
        message: `Olá ${nome} tudo bem!`,
        teste: "teste json",
        idade: idade
     });
});

server.get("/oi/:nome", (req, res) => {
    const { nome } = req.params;

    return res.json({
        title: "Glória",
        message: `Segunda query ${nome} usando Nodemon quarto teste!`,
    });
});

server.listen(3000);