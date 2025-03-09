// import { TodoItem } from "./index.js";
// import { Category } from "./index.js";

export function getInputDataTodo() {
    const titleTodo = document.querySelector("#Todo-Title").value;
    const descriptionTodo = document.querySelector("#Todo-Description").value;
    const dueDateTodo = document.querySelector("#Todo-DueDate").value;
    const priorityTodo = document.querySelector("#Todo-Priority").value;

    return [titleTodo, descriptionTodo, dueDateTodo, priorityTodo];
}

export function createTodoinList(todoTitle, todoDescription, tododueDate, todoPriority) {
    const list = document.querySelector("#listTodos-container");
    const divTodoCard = document.createElement("div");
    const h4TodoCardTitle = document.createElement("h4");

    divTodoCard.setAttribute("class", "listTodo");

    divTodoCard.setAttribute("data-Title", todoTitle);
    divTodoCard.setAttribute("data-description", todoDescription);
    divTodoCard.setAttribute("data-dueDate", tododueDate);
    divTodoCard.setAttribute("data-Priority", todoPriority);

    h4TodoCardTitle.textContent = todoTitle;

    list.append(divTodoCard);
    divTodoCard.append(h4TodoCardTitle);
}

export function deleteTodoinList() {
    const list = document.querySelector("#listTodos-container");
    list.textContent = "";
}

export function addDeteilsWindowforTodo() {
    const listTodoClass = document.querySelectorAll(".listTodo");
    listTodoClass.forEach((element) => {
        element.addEventListener("click", () => {
            const todoTitle = element.getAttribute("data-title");
            const todoDescription = element.getAttribute("data-description");
            const todoCatagory = element.getAttribute("data-Catagory");
            const todoPriority = element.getAttribute("data-Priority");
            const todoDueDate = element.getAttribute("data-duedate");

            const h4 = document.createElement("h4");
            const p = document.createElement("p");
            const pTextCatagory = document.createElement("p");
            const spanTextCatagory = document.createElement("span");

            const pTextDueDate = document.createElement("p");
            const spanTextDueDate = document.createElement("span");
            const divContainerCategory = document.createElement("div");
            const divContainerDueDate = document.createElement("div");

            const divContainerPriority = document.createElement("div");
            const pTextPriority = document.createElement("p");
            const spanTextPriority = document.createElement("span");

            h4.textContent = todoTitle;
            p.textContent = todoDescription;

            listTodosData.textContent = "";

            divContainerCategory.setAttribute("id", "listTodosDataCategory");
            pTextCatagory.textContent = "Category";
            spanTextCatagory.textContent = todoCatagory;
            divContainerCategory.append(pTextCatagory, spanTextCatagory);

            divContainerDueDate.setAttribute("id", "listTodosDataDueDate");
            pTextDueDate.textContent = "Due Date";
            spanTextDueDate.textContent = todoDueDate;
            divContainerDueDate.append(pTextDueDate, spanTextDueDate);

            divContainerPriority.setAttribute("id", "listTodosDataDueDate");
            pTextPriority.textContent = "Priority";
            spanTextPriority.textContent = todoPriority;
            divContainerPriority.append(pTextPriority, spanTextPriority);

            listTodosData.append(
                h4,
                p,
                divContainerCategory,
                divContainerDueDate,
                divContainerPriority
            );
        });
    });
}

export const dialog = document.querySelector("dialog");
export const createTodoButton = document.querySelector("#createTodo");
const showButtonDialog = document.querySelector("#addNewTodo");
const closeButtonDialog = document.querySelector("#closeTodoCreater");

showButtonDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeButtonDialog.addEventListener("click", () => {
    dialog.close();
});
