import { Todo } from "./todo.js";
import { allProjects } from "./project-display-controller.js";

const allTodos = [];
const projectTodoDialog = document.getElementById("project-todo-dialog");
const addTodoBtnDiv = document.querySelector(".todos-plus-btn-div");
const closeProjectTodoBtn = document.getElementById("close-project-todo-modal");
const projectTodoForm = document.getElementById("project-todo-form");
const output = document.querySelector(".output");
const addTodoBtn = document.querySelector(".todo-plus-btn");

closeProjectTodoBtn.addEventListener("click", () => {
  projectTodoDialog.close();
});

addTodoBtn.addEventListener("click", () => {
  projectTodoDialog.showModal();
});

projectTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const projectTodoTitle = document.getElementById("project-todo-title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const notes = document.getElementById("notes").value;

  const newTodo = new Todo(
    projectTodoTitle,
    // description,
    dueDate,
    // priority,
    // notes,
  );

  const project = allProjects.find((p) => p.id === addTodoBtn.id);

  project.todoList.push(newTodo);

  document.getElementById("project-todo-title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("notes").value = "";

  renderTodos(project);

  projectTodoDialog.close();
});

export function renderProjectContents(div, contentTab, project) {
  div.addEventListener("click", () => {
    addTodoBtn.id = project.id;

    contentTab.textContent = project.projectName;

    renderTodos(project);
  });
}

function renderTodos(project) {
  output.innerHTML = "";

  project.todoList.forEach((todo) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");

    div.classList.add("todo-output");
    p.textContent = todo.title;
    span.textContent = todo.dueDate;

    div.appendChild(p);
    div.appendChild(span);

    output.appendChild(div);
  });
}
