import { Request, Response } from 'express';

import userService from '../services/user.service';

export class UserController {
  index(req: Request, res: Response) {
    const getUser = userService.getUser();

    return res.send({
      statusCode: 200,
      message: 'User list successfully!',
      msgCode: 'GET_USER_LIST_SUCCESS',
      data: getUser.data,
      metadata: getUser.metadata,
    });
  }

  show(req: Request, res: Response) {
    return res.send({
      statusCode: 200,
      message: 'User list successfully!',
      msgCode: 'GET_USER_SUCCESS',
      data: userService.findOne(req.params.id),
    });
  }

  store(req: Request, res: Response) {
    return res.send({
      statusCode: 200,
      message: 'User create successfully!',
      msgCode: 'STORE_USER_SUCCESS',
      data: userService.create(req.body),
    });
  }

  update(req: Request, res: Response) {
    return res.send({
      statusCode: 200,
      message: 'User update successfully!',
      msgCode: 'UPDATE_USER_SUCCESS',
      data: userService.update(req.body),
    });
  }

  destroy(req: Request, res: Response) {
    return res.send({
      statusCode: 200,
      message: 'User delete successfully!',
      msgCode: 'DELETED_SUCCESS',
      data: userService.destroy(req.params.id),
    });
  }
}
