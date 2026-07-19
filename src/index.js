import "./styles.css";
import "./project-display-controller.js";
import "./project-todo-display-controller.js";
import "./all.js";
import { allTodos } from "./project-todo-display-controller.js";
import { Todo } from "./todo.js";

// import { isToday, isThisWeek, parseISO } from "date-fns";

// const todoItemOne = new Todo(
//   "Walk",
//   "You have to walk atleast 1km!",
//   "2026-07-02",
//   "High",
//   "None for now",
// );
// allTodos.push(todoItemOne);

// const todoItemTwo = new Todo("TEST", "Test", "2026-06-25", "Medium", "test");
// allTodos.push(todoItemTwo);

// const todoItemThree = new Todo(
//   "Read Book",
//   "Read at least 30 pages of a book.",
//   "2026-07-02",
//   "Medium",
//   "Finish Chapter 5",
// );
// allTodos.push(todoItemThree);

// const todoItemFour = new Todo(
//   "Workout",
//   "Complete a 45-minute strength training session.",
//   "2026-07-04",
//   "High",
//   "Focus on upper body",
// );
// allTodos.push(todoItemFour);

// const todoItemFive = new Todo(
//   "Grocery Shopping",
//   "Buy vegetables, fruits, milk, and eggs.",
//   "2026-07-05",
//   "Low",
//   "Use discount coupons",
// );
// allTodos.push(todoItemFive);

// const todoItemSix = new Todo(
//   "Clean Room",
//   "Vacuum the floor and organize the desk.",
//   "2026-07-06",
//   "Medium",
//   "Don't forget under the bed",
// );
// allTodos.push(todoItemSix);

// const todoItemSeven = new Todo(
//   "Pay Bills",
//   "Pay electricity and internet bills.",
//   "2026-07-02",
//   "High",
//   "Due before 5 PM",
// );
// allTodos.push(todoItemSeven);

// const todoItemEight = new Todo(
//   "Study JavaScript",
//   "Practice ES6 modules and classes for 2 hours.",
//   "2026-07-08",
//   "High",
//   "Review closures afterward",
// );
// allTodos.push(todoItemEight);

// const todoItemNine = new Todo(
//   "Call Parents",
//   "Catch up with family over a phone call.",
//   "2026-07-02",
//   "Medium",
//   "Ask about weekend plans",
// );
// allTodos.push(todoItemNine);

// const todoItemTen = new Todo(
//   "Water Plants",
//   "Water all indoor and outdoor plants.",
//   "2026-07-10",
//   "Low",
//   "Check soil moisture first",
// );
// allTodos.push(todoItemTen);

// const todoItemEleven = new Todo(
//   "Meal Prep",
//   "Prepare lunches for the next three days.",
//   "2026-07-02",
//   "Medium",
//   "Cook chicken and rice",
// );
// allTodos.push(todoItemEleven);

// const todoItemTwelve = new Todo(
//   "Project Update",
//   "Finish the dashboard UI and push changes to GitHub.",
//   "2026-07-02",
//   "High",
//   "Create a pull request afterward",
// );
// allTodos.push(todoItemTwelve);

// const todaysDue = allTodos.filter((todo) => isToday(parseISO(todo.dueDate)));

// const thisWeekDue = allTodos.filter((todo) =>
//   isThisWeek(parseISO(todo.dueDate)),
// );

// console.log(thisWeekDue);
