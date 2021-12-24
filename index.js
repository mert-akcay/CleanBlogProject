const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');

const app = express();

//CONNECT DB
mongoose.connect('mongodb://localhost/cleanblog-test-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index',{
    posts
  })
});

app.get('/about', (req, res) => {
  res.render('index')
});

app.get('/add_post', (req, res) => {
  res.render('add_post')
});

app.post('/posts', async (req, res) => {
  console.log(req.body);
  await Post.create(req.body);
  res.redirect('/');
});



const port = 3001;
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
