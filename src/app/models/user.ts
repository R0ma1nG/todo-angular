export class User {
  id: number;
  username: string;
  password: string;

  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
