import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
dotenv.config({ override: true });

// Import routes
import routes from './routes';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT || 3001, () => {
  console.log('Server Listening on PORT:', process.env.PORT || 3001);
});
