const express = require('express');

const app = express();

app.get('/', (req, res) => {
  let data = {
    id: 1,
    title: 'Blog Title',
    description: 'Blog Description',
  };
  res.send(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
