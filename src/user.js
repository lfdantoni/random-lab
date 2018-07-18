export class User {
  username: string;
  creationTime: DateTime;

  constructor(username: string, creationTime: DateTime) {
    this._creationTime = creationTime;
    this._username = username;
  }
}