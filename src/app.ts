import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import connectDB from './config/config.database';
import userRoutes from './routes/user.router';

dotenv.config({ override: true });

connectDB();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route gốc
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Import và sử dụng routes
app.use('/api/users', userRoutes);
app.use('/login', userRoutes);
app.use('/register', userRoutes);

// app.use('/api', routes); // Bỏ dòng này nếu không cần thiết

app.listen(process.env.PORT || 3001, () => {
  console.log('Server Listening on PORT:', process.env.PORT || 3003);
});

export default app;
