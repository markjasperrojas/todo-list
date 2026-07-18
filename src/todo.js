// export class Todo {
//   constructor(title, description, dueDate, priority, notes) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.notes = notes;
//   }
// }

export class Todo {
  constructor(title, dueDate) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.dueDate = dueDate;
  }
}
