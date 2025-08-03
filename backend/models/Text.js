import mongoose from 'mongoose';

const textSchema = new mongoose.Schema({
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Text', textSchema);
