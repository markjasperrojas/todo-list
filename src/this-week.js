import { allTodos } from "./project-todo-display-controller.js";
import { output } from "./project-todo-display-controller.js";
import { isThisWeek, parseISO } from "date-fns";

const weekDiv = document.getElementById("week-div");

weekDiv.addEventListener("click", () => {
  output.innerHTML = "";

  const thisWeekDue = allTodos.filter((todo) =>
    isThisWeek(parseISO(todo.dueDate)),
  );

  thisWeekDue.forEach((todo) => {
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
