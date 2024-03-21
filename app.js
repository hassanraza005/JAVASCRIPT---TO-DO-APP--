function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;
    var taskList = document.getElementById("taskList");

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    input.value = "";
}