import "./InterfaceController.js";
import "./styles.css";
import { getInputDataTodo } from "./InterfaceController.js";
import { dialog } from "./InterfaceController.js";
import { createTodoButton } from "./InterfaceController.js";
import { createTodoinList } from "./InterfaceController.js";
import { deleteTodoinList } from "./InterfaceController.js";
import { addDeteilsWindowforTodo } from "./InterfaceController.js";

export class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class Category {
    constructor(title) {
        this.title = title;
        this.items = new Array();
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

const TodoItemEmial = new TodoItem("Read email", "Read the work email", 2025 - 4 - 3, "high");
const TodoItemFiel = new TodoItem(
    "Reserch something",
    "Reaserch that paper for school",
    2025 - 4 - 3,
    "high"
);
const TodoItemEmiall = new TodoItem(
    "Do the homework and study",
    "Do the math homework from the page 12 - 13, all excersies.",
    2025 - 4 - 3,
    "high"
);
const TodoItemFiell = new TodoItem(
    "Go to the supermarket and buy milk",
    "Go to the supermakret and buy two crates of milk tha are on discount.",
    2025 - 4 - 3,
    "high"
);
const AllTodos = new Category("Default");
AllTodos.addItem(TodoItemEmial);
AllTodos.addItem(TodoItemFiel);
AllTodos.addItem(TodoItemEmiall);
AllTodos.addItem(TodoItemFiell);
console.log(AllTodos.getItems());

createTodoButton.addEventListener("click", () => {
    const inputDataArr = getInputDataTodo();
    AllTodos.addItem(
        new TodoItem(inputDataArr[0], inputDataArr[1], inputDataArr[2], inputDataArr[3])
    );
    createListFromCategory();
    dialog.close();
});

function createListFromCategory() {
    deleteTodoinList();

    AllTodos.getItems().forEach((element) => {
        createTodoinList(element.title, element.description, element.dueDate, element.priority);
    });
    addDeteilsWindowforTodo();
}
createListFromCategory();
addDeteilsWindowforTodo();
