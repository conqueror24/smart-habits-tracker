const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const habitRoutes = require('./routes/habitRoutes');
require('./services/cronJobs'); // Start cron jobs

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', habitRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
