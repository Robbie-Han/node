const express = require('express');
const app = express();
const articles = [{title:'example'}];
const bodyParser = require('body-parser');
app.set('port', process.env.PORT || 3000);

app.get('/articles', (req, res, next) => {
    res.send('articles');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.post('/articles',(req, res, next) =>{
    const article = {title:req.body.title};
    articles.push(article);
    res.send(article);
});

app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
});

app.delete('articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('delete', id);
    res.send(articles[id]);
});

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
});