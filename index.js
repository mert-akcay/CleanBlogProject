const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const Post = require('./models/Post');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers')


const app = express();

//CONNECT DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',{
  methods:['GET','POST']
}));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//ROUTES
app.get('/', postController.getAllPosts());
app.get('/posts/:id', postController.getPost);
app.get('/posts/edit/:id', postController.getPost2Edit);
app.get('/add_post', pageController.addPost);
app.get('/about', pageController.about);
app.post('/posts', postController.addPost);
app.put('/posts/:id', postController.editPost);
app.delete('/posts/:id',postController.deletePost);


const port = 3001;
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
