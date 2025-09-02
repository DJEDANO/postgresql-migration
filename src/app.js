const express = require('express');
const sequelize = require('./db');
const taskRoutes = require('./routes/tasks');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
    await sequelize.sync(); // crée les tables si elles n'existent pas
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
