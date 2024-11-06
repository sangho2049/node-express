import { Request, Response } from 'express';

import userService from '../services/user.service';

export class UserController {
  // Login
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userService.findByEmail(email);
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'User not found',
          msgCode: 'USER_NOT_FOUND',
        });
      }

      // Kiểm tra mật khẩu ( có thể sử dụng bcrypt để so sánh mật khẩu)
      const isMatch = user.password === password;
      if (!isMatch) {
        return res.status(401).json({
          statusCode: 401,
          message: 'Invalid password',
          msgCode: 'INVALID_PASSWORD',
        });
      }

      res.status(200).json({
        statusCode: 200,
        message: 'Login successful',
        msgCode: 'LOGIN_SUCCESS',
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      // Chuyển đổi error thành kiểu Error
      const errorMessage = (error as Error).message || 'Unknown error occurred';
      res.status(500).json({
        statusCode: 500,
        message: 'Failed to create user',
        msgCode: 'STORE_USER_ERROR',
        error: errorMessage,
      });
    }
  }

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

  // lưu trữ dữ liệu users
  async store(req: Request, res: Response) {
    try {
      const newUser = await userService.create(req.body);
      res.status(201).json({
        statusCode: 201,
        message: 'User created successfully!',
        msgCode: 'STORE_USER_SUCCESS',
        data: newUser,
      });
    } catch (error) {
      // Ép kiểu error thành Error để truy cập vào thuộc tính message
      res.status(500).json({
        statusCode: 500,
        message: 'Failed to create user',
        msgCode: 'STORE_USER_ERROR',
        error: (error as Error).message, // Ép kiểu tại đây
      });
    }
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
