import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gitUserSchema = new Schema({
  name: { type: 'String', required: true },
  followers: { type: 'String', required: true },
  site: { type: 'String', required: true },
  email: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('gitUser', gitUserSchema);
