const app = require('./app');

const PORT = 3000;

app.listen(PORT, () =>{
    console.log("Api em execução http://localhost:${PORT}");
});