const addBtn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const totalTasks = document.getElementById("totalTasks")
const completedTasks = document.getElementById("completedTasks")

function addTask() {
    addBtn.addEventListener("click", function () {
        const textValue = taskInput.value.trim();

        if (textValue === "") return;

        const noTaskMessage = document.getElementById("noTaskMessage");
        if (noTaskMessage) {
            noTaskMessage.remove();
        }

        // Create task item
        const newTask = document.createElement("li");
        newTask.classList.add("task-item");

        // Create checkbox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("complete-checkbox");

        // Create task text
        const taskText = document.createElement("span");
        taskText.innerText = textValue;
        taskText.classList.add("task-text");

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-button");

        // Append elements in correct order
        newTask.appendChild(checkBox);
        newTask.appendChild(taskText);
        newTask.appendChild(deleteBtn);

        taskList.appendChild(newTask);

        // Clear input field after adding task
        taskInput.value = "";
        taskCount()

        // Handle delete button click
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(newTask);
            taskCount()
            taskComplete()
        });

        // Handle checkbox marking completed tasks
        checkBox.addEventListener("change", function () {
            newTask.classList.toggle("completed");
            taskComplete()
        });

    });
}

function taskCount() {
    const totalList = taskList.children
    let totalTask = 0
    for (let i = 0; i < totalList.length; i++) {
        totalTask++;
    }

    if (totalTask === 0) {
        let noTask = document.createElement("li")
        noTask.id = "noTaskMessage";
        noTask.classList.add("task-item");

        const taskText = document.createElement("span");
        taskText.innerText = `No tasks yet. Add one above!`
        taskText.classList.add("task-text");

        noTask.appendChild(taskText)
        taskList.appendChild(noTask)
    }

    totalTasks.innerText = `Total tasks: ${totalTask}`
}

function taskComplete() {
    let count = 0;
    for (let task of taskList.children) {
        if (task.classList.contains("completed")) {
            count++
        }
    }

    completedTasks.innerText = `Completed ${count}`
}

document.addEventListener('DOMContentLoaded', function() {
    addTask()
    taskCount()
})
