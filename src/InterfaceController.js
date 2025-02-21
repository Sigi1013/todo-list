function createTodo() {
    const titleTodo = document.querySelector("#Todo-Title");
    const descriptionTodo = document.querySelector("#Todo-Description");
    const dueDateTodo = document.querySelector("#Todo-DueDate");
    const priorityTodo = document.querySelector("#Todo-Priority");

    new TodoItem(titleTodo, descriptionTodo, dueDateTodo, priorityTodo);
}

const dialog = document.querySelector("dialog");
const showButtonDialog = document.querySelector("#addNewTodo");
const closeButtonDialog = document.querySelector("#closeTodoCreater");
const createTodoButton = document.querySelector("#createTodo");

createTodoButton.addEventListener("click", () => {
    createTodo();
    console.log(TodoItem);
});

showButtonDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeButtonDialog.addEventListener("click", () => {
    dialog.close();
});
