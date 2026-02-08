function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = "📌 " + taskText;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
