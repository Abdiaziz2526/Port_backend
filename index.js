import express from 'express';
import connectToDb from './Configdb/database.js';
import userRoutes from './routes/userRoutes.js';
import businessRoutes from './routes/businessRoutes.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();
connectToDb();

const port = 7000;
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/business', businessRoutes);


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
