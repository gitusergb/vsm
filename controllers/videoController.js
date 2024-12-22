const Video = require('../models/Video');

const uploadVideo = async (req, res) => {
  try {
    const { title,description,imageurl, googleDriveUrl, tags, fileSize, } = req.body;
    const video = new Video({ title, description,imageurl, googleDriveUrl, tags, fileSize,uploadedBy: req.user.id });
    await video.save();
    res.status(201).json({ message: 'Video uploaded successfully', video });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

  


const getVideos = async (req, res) => {
  try {
    const { filter, tags, page = 1 } = req.query;
    const query = {};
    if (filter) query.title = { $regex: filter, $options: 'i' };
    if (tags) query.tags = { $in: tags.split(',') };

    const videos = await Video.find(query)
      .skip((page - 1) * 10)
      .limit(10)
      .populate('uploadedBy', 'username');
    res.json({ videos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadVideo, getVideos };
