const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: read JSON data sent in the request body.
app.use(express.json());

// Temporary in-memory data (resets whenever the server restarts).
let users = [
  { id: 1, name: 'Aarav', email: 'aarav@example.com' },
  { id: 2, name: 'Diya', email: 'diya@example.com' }
];
let nextId = 3;

// GET: retrieve all users.
app.get('/users', (req, res) => {
  res.status(200).json({ message: 'Users retrieved successfully', users });
});

// GET: retrieve one user by ID.
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

// POST: create a new user.
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Both name and email are required' });
  }
  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

// PUT: update an existing user completely.
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Both name and email are required' });
  }
  user.name = name;
  user.email = email;
  res.status(200).json({ message: 'User updated successfully', user });
});

// DELETE: remove a user by ID.
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  const deletedUser = users.splice(index, 1)[0];
  res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
});

app.listen(PORT, () => {
  console.log(`Experiment 1 server is running at http://localhost:${PORT}`);
});
