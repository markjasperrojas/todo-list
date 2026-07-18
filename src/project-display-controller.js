import { Project } from "./project.js";
import { todoIcon } from "./todo-icon.js";
import { Todo } from "./todo.js";
import { renderProjectContents } from "./project-todo-display-controller.js";

export let allProjects = [];
const projectDialog = document.getElementById("project-dialog");
const openProjectBtn = document.getElementById("show-project-modal");
const closeProjectBtn = document.getElementById("close-project-modal");
const projectForm = document.getElementById("project-form");
const showProjects = document.querySelector(".show-projects");
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
    const div2 = document.createElement("div");
    const span = document.createElement("span");
    const removeProjectBtn = document.createElement("button");

    div.classList.add("tab");
    div2.innerHTML = todoIcon;
    span.textContent = project.projectName;
    removeProjectBtn.textContent = "x";

    removeProjectBtn.addEventListener("click", () => {
      allProjects = allProjects.filter((item) => item.id !== project.id);

      renderProjects();
    });

    div2.appendChild(span);
    div.appendChild(div2);
    div.appendChild(removeProjectBtn);
    showProjects.appendChild(div);

    renderProjectContents(div, contentTab, project);
  });
}
