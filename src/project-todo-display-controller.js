const allTodos = [];
const projectTodoDialog = document.getElementById("project-todo-dialog");
const openProjectTodoBtn = document.getElementById("show-project-todo-modal");
const closeProjectTodoBtn = document.getElementById("close-project-todo-modal");

openProjectTodoBtn.addEventListener("click", () => {
  projectTodoDialog.showModal();
});

closeProjectTodoBtn.addEventListener("click", () => {
  projectTodoDialog.close();
});
