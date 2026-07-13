import { Todo } from "./todo.js";

const allTodos = [];
const projectTodoDialog = document.getElementById("project-todo-dialog");
// const openProjectTodoBtn = document.getElementById("show-project-todo-modal");
const addTodoBtnDiv = document.querySelector(".todos-plus-btn");
const closeProjectTodoBtn = document.getElementById("close-project-todo-modal");
const projectTodoForm = document.getElementById("project-todo-form");
const output = document.querySelector(".output");

// openProjectTodoBtn.addEventListener("click", () => {
//   projectTodoDialog.showModal();
// });

closeProjectTodoBtn.addEventListener("click", () => {
  projectTodoDialog.close();
});

export function renderProjectContents(div, contentTab, project) {
  div.addEventListener("click", () => {
    output.innerHTML = "";
    addTodoBtnDiv.innerHTML = "";

    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "+";
    addTodoBtn.id = project.id;

    contentTab.textContent = project.projectName;

    addTodoBtn.addEventListener("click", () => {
      projectTodoDialog.showModal();
    });

    projectTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectTodoTitle =
        document.getElementById("project-todo-title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("due-date").value;
      const priority = document.getElementById("priority").value;
      const notes = document.getElementById("notes").value;

      const newTodo = new Todo(
        projectTodoTitle,
        description,
        dueDate,
        priority,
        notes,
      );

      project.todoList.push(newTodo);

      document.getElementById("project-todo-title").value = "";
      document.getElementById("description").value = "";
      document.getElementById("due-date").value = "";
      document.getElementById("priority").value = "";
      document.getElementById("notes").value = "";

      renderTodos(project);

      projectTodoDialog.close();
    });

    addTodoBtnDiv.appendChild(addTodoBtn);

    renderTodos(project);
  });
}

function renderTodos(project) {
  output.innerHTML = "";

  project.todoList.forEach((todo) => {
    const div2 = document.createElement("div");
    div2.textContent = todo.title;

    output.appendChild(div2);
  });
}
