import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Text from './models/Text.js';

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// API: Save text
app.post('/api/text', async (req, res) => {
  try {
    const newText = new Text({ content: req.body.content });
    await newText.save();
    res.status(201).json(newText);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API: Get all texts (latest first)
app.get('/api/text', async (req, res) => {
  try {
    const texts = await Text.find().sort({ date: -1 });
    res.json(texts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
