const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolioRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectToDB();  // Attempt to connect to the database

app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Log the connection string again to confirm it's being read in server.js
console.log("Server MongoDB Connection String:", process.env.DB_STRING);
