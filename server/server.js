const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/mental_health', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.post('/api/register', [
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const payload = {
      user: {
        id: newUser.id
      }
    };

    jwt.sign(payload, 'secret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.post('/api/login', [
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, 'secret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (err) {
    res.status(500).send('Server error');
  }
});

const wellnessTips = [
  // Adicione dicas de bem-estar reais aqui
];

const meditationExercises = [
  // Adicione exercícios de meditação reais aqui
];

const healthProfessionals = [
  // Adicione informações de profissionais de saúde reais aqui
];

app.get('/api/wellness-tips', (req, res) => {
  res.json(wellnessTips);
});

app.get('/api/meditation-exercises', (req, res) => {
  res.json(meditationExercises);
});

app.get('/api/health-professionals', (req, res) => {
  res.json(healthProfessionals);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
