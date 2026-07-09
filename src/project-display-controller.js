import { Project } from "./project.js";
import { todoIcon } from "./todo-icon.js";

const allProjects = [];
const projectDialog = document.getElementById("project-dialog");
const openProjectBtn = document.getElementById("show-project-modal");
const closeProjectBtn = document.getElementById("close-project-modal");
const projectForm = document.getElementById("project-form");
const showProjects = document.querySelector(".show-projects");
const output = document.querySelector(".output");

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

    // create another function for this:
    div.addEventListener("click", () => {
      project.todoList.forEach((todo) => {
        const div2 = document.createElement("div");
        div2.textContent = todo.title;

        output.appendChild(div2);
      });
    });
  });
}
