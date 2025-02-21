import "./InterfaceController.js";
class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Category {
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
const TodoItemFiel = new TodoItem("Read email", "Read the work email", 2025 - 4 - 3, "high");
const Default = new Category("Default");
Default.addItem(TodoItemEmial);
Default.addItem(TodoItemFiel);
console.log(Default.getItems());
