let express = require('express');
let app = express();

app.use(express.json());

let PORT = 3000;

app.listen(3000, () => { console.log (`Funcionando na porta ${PORT}`) });

