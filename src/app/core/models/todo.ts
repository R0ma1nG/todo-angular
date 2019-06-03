export class Todo {
  uid: number;
  title: string;
  description: string;

  constructor(uid, title, description) {
    this.uid = uid;
    this.title = title;
    this.description = description;
  }
}
