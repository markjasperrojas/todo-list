export class Project {
  constructor(projectName) {
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
