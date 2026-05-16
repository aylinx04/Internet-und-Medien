const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

let catalog = [
  { name: 'Name 1', title: 'Title 1', text: 'Review 1' },
  { name: 'Name 2', title: 'Title 2', text: 'Review 2' },
  { name: 'Name 3', title: 'Title 3', text: 'Review 3' }
];

app.get('/catalog', (req, res) => {
  res.json(catalog);
});

app.post('/add', (req, res) => {
  const newReview = req.body;
  catalog.push(newReview);
  res.status(201).json(newReview);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'StartSeite.html'));
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});