import { UserStore } from "../userStore";
import { User } from "../user";

export class FakeUserStore extends UserStore {
  _users: Array<User> = [];

  store = (user: User) => {
    this._users.push(user)
  }

  findAll = () => {
    return this._users;
  }
}