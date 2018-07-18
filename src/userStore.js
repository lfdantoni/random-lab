import { User } from "./user";

export class UserStore {
  /**
   * @param user user to save
   */
  store = (user: User) => { throw 'It is not implemented' }

  /**
   * @returns an array of all users
   */
  findAll = () => { throw 'It is not implemented' }
}