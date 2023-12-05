const express = require('express');
const mongoose = require('mongoose');
const dateRoutes = require('./routes/dates');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/dates', dateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});