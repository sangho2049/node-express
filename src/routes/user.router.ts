import { Router } from 'express';

import { UserController } from '../controllers/user.controller';

class UserRoutes {
  router = Router();
  controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.controller.index).get('/:id', this.controller.show);

    this.router.put('/', this.controller.store);

    this.router.patch('/', this.controller.update);

    this.router.delete('/', this.controller.destroy);
  }
}

export default new UserRoutes().router;
