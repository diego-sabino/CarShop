import express from 'express';
import CarRoutes from './Routes/CarRoutes';
import MotorcycleRoutes from './Routes/MotorcycleRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use(CarRoutes);
app.use(MotorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
