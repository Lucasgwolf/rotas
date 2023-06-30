const express = require('express');

const app = express();

app.get('/rota1',fuction(res,req){
    res.status(200).send('servidor rodando !!! Rota 1');
});
app.get('/rota2',fuction(res,req){
    res.status(200).send('servidor rodando !!! Rota 2');
});
app.get('/rota3',fuction(res,req){
    res.status(200).send('servidor rodando !!! Rota 3');
});
app.get('/rota4',fuction(res,req){
    res.status(200).send('servidor rodando !!! Rota 4');
});
app.get('/rota5',fuction(res,req){
    res.status(200).send('servidor rodando !!! Rota 5');
});

app.listen(3344, ()=> console.log('Servidor ligado - Rodando na porta 3344'));