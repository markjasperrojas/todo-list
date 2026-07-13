export class Project {
  constructor(projectName) {
    this.id = crypto.randomUUID();
    this.projectName = projectName;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(todoTitle) {
    this.todoList = this.todoList.filter((todo) => todo.title !== todoTitle);
  }
}
