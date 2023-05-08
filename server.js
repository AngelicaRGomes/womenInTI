const express = require('express');
const womenRoutes = require('./womenRoutes');
const app = express();
const port = 3333;
// const mostraPorta = () => console.log(`Servidor rodando na porta ${port}.`);
app.listen(port, () => (console.log(`Servidor rodando na porta ${port}.`)));

app.use(womenRoutes)
// app.use(router.get('/hello', showHello))
