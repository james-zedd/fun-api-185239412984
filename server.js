const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const connectDB = require('./api/config/db');
const PORT = process.env.PORT || 5000;

// Middleware: Body Parser
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('your app works');
});

// Define Routes
app.use('/api/classes', require('./api/routes/classes'));
app.use('/api/instructors', require('./api/routes/instructors'));

// DB connection
connectDB();

app.listen(PORT, () => console.log(`Connected to server on port ${PORT}`));