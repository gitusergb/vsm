const express = require('express');
const { uploadVideo, getVideos } = require('../controllers/videoController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/upload', authMiddleware, uploadVideo);
router.get('/', authMiddleware, getVideos);

module.exports = router;
