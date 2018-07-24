export class User {
  username: string;
  creationTime: DateTime;

  constructor(username: string, creationTime: DateTime) {
    this.creationTime = creationTime;
    this.username = username;
  }
}