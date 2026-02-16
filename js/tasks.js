const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
window.addEventListener("load", loadTasks);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(taskText);
    saveTask(taskText);

    taskInput.value = "";
}

function createTask(taskText, isCompleted = false) {
    const li = document.createElement("li");

    if (isCompleted) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateTaskStatus(taskText, li.classList.contains("completed"));
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        removeTask(taskText);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}




function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTask(task.text, task.completed));
}

function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskStatus(taskText, isCompleted) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task =>
        task.text === taskText
            ? { ...task, completed: isCompleted }
            : task
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

