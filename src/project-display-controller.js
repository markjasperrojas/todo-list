import { Project } from "./project.js";
import { todoIcon } from "./todo-icon.js";
import { Todo } from "./todo.js";

const allProjects = [];
const projectDialog = document.getElementById("project-dialog");
const openProjectBtn = document.getElementById("show-project-modal");
const closeProjectBtn = document.getElementById("close-project-modal");
const projectForm = document.getElementById("project-form");
const showProjects = document.querySelector(".show-projects");
const output = document.querySelector(".output");
const contentTab = document.getElementById("content-tab");

openProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

closeProjectBtn.addEventListener("click", () => {
  projectDialog.close();
});

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const projectTitle = document.getElementById("project-title").value;

  const project = new Project(projectTitle);

  allProjects.push(project);

  document.getElementById("project-title").value = "";

  renderProjects();

  projectDialog.close();
});

function renderProjects() {
  showProjects.innerHTML = "";

  allProjects.forEach((project) => {
    const div = document.createElement("div");
    const span = document.createElement("span");

    div.classList.add("tab");
    div.innerHTML = todoIcon;
    span.textContent = project.projectName;
    div.appendChild(span);
    showProjects.appendChild(div);

    // create another function for this later
    div.addEventListener("click", () => {
      contentTab.textContent = project.projectName;

      project.todoList.forEach((todo) => {
        const div2 = document.createElement("div");
        div2.textContent = todo.title;

        output.appendChild(div2);
      });
    });
  });
}

// const gym = new Project("Gym");
// allProjects.push(gym);

// const todoItemOne = new Todo(
//   "Walk",
//   "You have to walk atleast 1km!",
//   "2026-07-02",
//   "High",
//   "None for now",
// );

// const todoItemTwo = new Todo("TEST", "Test", "2026-06-25", "Medium", "test");

// const todoItemThree = new Todo(
//   "Read Book",
//   "Read at least 30 pages of a book.",
//   "2026-07-02",
//   "Medium",
//   "Finish Chapter 5",
// );

// gym.todoList.push(todoItemOne);
// gym.todoList.push(todoItemTwo);
// gym.todoList.push(todoItemThree);
