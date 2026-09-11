const form = document.querySelector(".todo-form");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const errorPara = document.querySelector(".todo-form p")


form.addEventListener("submit", function (e) {

    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        errorPara.textContent = "Oops! Please enter a task before adding."
        return;
    }

    // Create main task
    const task = document.createElement("li");
    task.classList.add("task");

    // Create left section
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text
    const text = document.createElement("span");
    text.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(text);

    task.appendChild(taskLeft);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);

    // Complete task
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.color = "#999";
        } else {
            text.style.textDecoration = "none";
            text.style.color = "";
        }
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        task.remove();
    });

    input.value = "";
    errorPara.textContent = "";
});

input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
        errorPara.textContent = "";
    }
});