import { Request, Response, Router } from 'express';

import userRouter from './user.router';

const router = Router();

router.use('/health-check', (req: Request, res: Response) => {
  return res.send({
    message: 'Healthy is Okay!',
  });
});

router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Node Express API!');
});
router.get('/hello-world', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Routes
router.use('/user', userRouter);

export default router;
