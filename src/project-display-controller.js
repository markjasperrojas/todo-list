import { Project } from "./project.js";

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
    const div = document.createElement("button");
    div.textContent = project.projectName;
    showProjects.appendChild(div);

    div.addEventListener("click", () => {
      project.todoList.forEach((todo) => {
        const div2 = document.createElement("button");
        div2.textContent = todo.title;

        output.appendChild(div2);
      });
    });
  });
}
