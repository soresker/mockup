import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

// Routes import edilecek
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Database connection
createConnection().then(() => {
    console.log('Database connected');
    
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => console.log(error)); 