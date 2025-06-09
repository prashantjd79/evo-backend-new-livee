const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiKeySchema = new Schema({
  key: { type: String, required: true, unique: true },
  user: { type: String, required: true },
  role: { type: String, default: 'Admin' },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  lastUsed: { type: Date }
});

const ApiKey = mongoose.model('ApiKey', apiKeySchema);

module.exports = ApiKey;