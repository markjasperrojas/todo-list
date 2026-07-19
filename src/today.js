import { allTodos } from "./project-todo-display-controller.js";
import { output } from "./project-todo-display-controller.js";
import { isToday, parseISO } from "date-fns";

const todayDiv = document.getElementById("today-div");

todayDiv.addEventListener("click", () => {
  output.innerHTML = "";

  const todaysDue = allTodos.filter((todo) => isToday(parseISO(todo.dueDate)));

  todaysDue.forEach((todo) => {
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
});
