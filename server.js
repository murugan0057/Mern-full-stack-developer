const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./public/js/db');
connectDB();
dotenv.config();


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Event Management API Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

