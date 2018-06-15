const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/demo', (req, res)=>{
    res.render('w3demo');
});


app.get('*', (req, res)=>{
    res.render('error');
});


app.listen(3000, ()=>{
    console.log('server has started');
});