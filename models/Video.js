const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageurl: { type: String, required: true },
  googleDriveUrl: { type: String,  required: true  },
  tags: { type: [String], default: [] },
  fileSize: { type: Number, required: false},
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  uploadDate: { type: Date, default: Date.now },
                score: { type: String },
                reach: { type: String },
                engage:{ type: String },
                hype: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Video', VideoSchema);
