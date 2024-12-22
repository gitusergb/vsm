
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB Connection
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/videos', require('./routes/videoRoutes'));

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {console.log(`Backend server running on port ${PORT}`);
console.log(`Server is running at http://localhost:${PORT}`);
});
