import express from 'express';
import connectToDb from './Configdb/database.js';
import userRoutes from './routes/userRoutes.js';
import businessRoutes from './routes/businessRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import taxationRoutes from './routes/taxationRoutes.js';
import taxrateRoutes from './routes/taxrateRoute.js'
import taxPaymentRoutes from './routes/taxPaymentRoutes.js'
import messagesRoutes from './routes/messagesRoutes.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
connectToDb();

const port = 7000;
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/taxations', taxationRoutes);
app.use('/api/taxRate', taxrateRoutes);
app.use('/api/taxPayment', taxPaymentRoutes);
app.use('/api/messages', messagesRoutes);



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
