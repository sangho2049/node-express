import { IUser } from '../interfaces/user.interface';

export class UserService {
  getUser() {
    /**
     * TODO: get list user
     * Need get list user with page size is 15
     * And count user to get total user in db to show metadata
     */
    return {
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
        },
        {
          id: 2,
          name: 'Jane',
          email: 'jane@example.com',
        },
      ],
      metadata: {
        currentPage: 1,
        total: 2,
        totalPage: 1,
        prevPage: null,
        nextPage: null,
        pageSize: 15,
      },
    };
  }

  findOne(id: string) {
    /**
     * TODO: find user by id
     */
    return {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };
  }

  create(user: IUser) {
    /**
     * TODO: create user
     */
    return {
      id: 1,
      name: user.name ?? 'John Doe',
      email: user.email ?? 'john@example.com',
    };
  }

  update(user: IUser) {
    /**
     * TODO: update user
     */
    return {
      id: 1,
      name: user.name ?? 'John Doe',
      email: user.email ?? 'john@example.com',
    };
  }

  destroy(id: string) {
    /**
     * TODO: deleta user
     */
    return true;
  }
}

const userService = new UserService();

export default userService;
