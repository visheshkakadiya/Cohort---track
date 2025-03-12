const todoBoard = document.getElementById('todo-board');
const allBoard = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');
const addBoard = document.getElementById('add-board');

let boardPop = false;

// Function to add fly class events to task cards
function addFlyClassEvents(taskCard) {
    taskCard.addEventListener('dragstart', function () {
        taskCard.classList.add('flying');
    });

    taskCard.addEventListener('dragend', function () {
        taskCard.classList.remove('flying');
    });
}

// Apply fly class events to all existing items
allItems.forEach(addFlyClassEvents);

// Function to update task count for a board
function updateTaskCount(board) {
    const totalTasks = board.querySelector('.task-count');
    if (totalTasks) {
        const taskCount = board.querySelectorAll('.item').length;
        totalTasks.innerText = `Total Tasks: ${taskCount}`;
    }
}

// Function to handle sorting within a board
function initSortableList(e) {
    e.preventDefault();
    const draggingItem = document.querySelector(".flying");
    if (!draggingItem) return;

    // Get the current board where the dragging is happening
    const currentBoard = e.currentTarget;
    
    // Get all items in this board except the one being dragged
    const siblings = [...currentBoard.querySelectorAll(".item:not(.flying)")];
    
    // Find the sibling after which the dragging item should be placed
    // Only reposition when dragged past the midpoint of another item
    const nextSibling = siblings.find(sibling => {
        const siblingRect = sibling.getBoundingClientRect();
        const siblingMidpoint = siblingRect.top + siblingRect.height / 2;
        return e.clientY <= siblingMidpoint;
    });
    
    // Insert the dragging item before the found sibling
    currentBoard.insertBefore(draggingItem, nextSibling);
}

// Function to attach sorting listeners to a board
function attachSortingListeners(board) {
    board.addEventListener("dragover", initSortableList);
    board.addEventListener("dragenter", e => e.preventDefault());
}

// Apply sorting listeners to all existing boards
allBoard.forEach(attachSortingListeners);

// Handle dragging between boards
allBoard.forEach(board => {
    board.addEventListener('dragover', function (event) {
        event.preventDefault();

        const getFlying = document.querySelector('.flying');
        if (getFlying) {
            const previousBoard = getFlying.parentElement;
            board.appendChild(getFlying);
            
            // Update counts for both boards
            if (previousBoard && previousBoard !== board && 
                previousBoard.querySelector('.task-count')) {
                updateTaskCount(previousBoard);
            }
            updateTaskCount(board);
        }
    });
});

// Function to handle adding a new board
function AddBoard() {
    addBoard.addEventListener('click', function () {
        if (boardPop) return;

        boardPop = true;

        const popup = document.createElement("div");
        popup.classList.add("popup");

        popup.innerHTML = `
                <div class="popup-content">
                    <h3>Add New Board</h3>
                    <input type="text" id="boardName" placeholder="Enter board name">
                    <select id="boardColor">
                        <option value="#2d6a4f">#2d6a4f</option>
                        <option value="#5a189a">#5a189a</option>
                        <option value="#495057">#495057</option>
                        <option value="#a2d2ff">#a2d2ff</option>
                    </select>
                    <button id="createBoard">Create</button>
                    <button id="closePopup">Cancel</button>
                </div>
            `;

        document.body.appendChild(popup);

        // Close popup
        document.getElementById('closePopup').addEventListener('click', function () {
            popup.remove();
            boardPop = false;
        });

        document.getElementById('createBoard').addEventListener('click', function () {
            const boardName = document.getElementById('boardName').value.trim();
            const boardColor = document.getElementById('boardColor').value;

            if (boardName) {
                const newBoard = document.createElement('div');
                newBoard.classList.add('board');
                newBoard.setAttribute("id", `${boardName}`);
                newBoard.style.backgroundColor = boardColor;
                newBoard.innerHTML = `<nav>${boardName}</nav>`;

                // Create Task Count Display
                const totalTasks = document.createElement("span");
                totalTasks.classList.add("task-count");
                totalTasks.innerText = `Total Tasks: 0`;
                newBoard.appendChild(totalTasks);

                const taskInput = document.createElement('input');
                taskInput.type = 'text';
                taskInput.placeholder = 'Enter task...';
                newBoard.appendChild(taskInput);

                const addTask = document.createElement('button');
                addTask.innerText = 'Add Task';
                addTask.setAttribute('id', `${boardName}-add-task`);
                addTask.classList.add('addTask');

                const delBoard = document.createElement('button');
                delBoard.innerText = "Delete";
                delBoard.classList.add('delBoard');
                newBoard.appendChild(delBoard);

                taskInput.addEventListener("keypress", function (event) {
                    if (event.key === "Enter") {
                        event.preventDefault(); 
                        addTask.click(); 
                    }
                });
                
                newBoard.appendChild(addTask);

                // Task Adding Logic
                addTask.addEventListener('click', function () {
                    const taskCard = document.createElement("div");
                    taskCard.classList.add('item');
                    taskCard.setAttribute("draggable", true);

                    // Task Text
                    if (taskInput.value.trim() === '') {
                        alert('Please Add Task');
                        return;
                    }
                    const taskText = document.createElement("span");
                    taskText.innerText = taskInput.value;

                    // Date
                    const newDate = document.createElement("span");
                    newDate.setAttribute("class", "date");
                    const now = new Date();
                    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
                    newDate.textContent = now.toLocaleDateString(undefined, dateOptions);

                    // Edit Button
                    const editBtn = document.createElement("i");
                    editBtn.classList.add("fa-solid", "fa-pen", "edit-task");

                    editBtn.addEventListener("click", function () {
                        editBtn.classList.remove("fa-solid", "fa-pen", "edit-task");
                        editBtn.classList.add("fa-regular", "fa-floppy-disk", "save-task");

                        // Create an input field for editing
                        const editInput = document.createElement("input");
                        editInput.type = "text";
                        editInput.value = taskText.textContent;
                        editInput.classList.add("edit-input");

                        // Replace the taskText with the input field
                        taskCard.replaceChild(editInput, taskText);
                        editInput.focus(); // Auto-focus on input for quick editing

                        // Save the updated text when input loses focus or Enter key is pressed
                        const saveTask = () => {
                            if (editInput.value.trim() === "") {
                                alert("Please edit task");
                                return;
                            }
                            taskText.textContent = editInput.value;
                            taskCard.replaceChild(taskText, editInput); // Restore text

                            editBtn.classList.add("fa-solid", "fa-pen", "edit-task");
                            editBtn.classList.remove("fa-regular", "fa-floppy-disk", "save-task");
                        };

                        // Listen for Enter key to save
                        editInput.addEventListener("keypress", function (event) {
                            if (event.key === "Enter") {
                                saveTask();
                            }
                        });

                        // Listen for button click to save
                        editBtn.addEventListener("click", saveTask, { once: true });
                    });

                    // Delete Button
                    const deleteBtn = document.createElement("i");
                    deleteBtn.classList.add("fa-solid", "fa-trash", "delete-task");
                    deleteBtn.addEventListener("click", function () {
                        taskCard.remove();
                        updateTaskCount(newBoard);
                    });

                    // Append everything to task card
                    taskCard.appendChild(taskText);
                    taskCard.appendChild(newDate);
                    taskCard.appendChild(editBtn);
                    taskCard.appendChild(deleteBtn);

                    addFlyClassEvents(taskCard);
                    newBoard.appendChild(taskCard);
                    taskInput.value = "";

                    updateTaskCount(newBoard);
                });

                document.querySelector('.container').appendChild(newBoard);

                delBoard.addEventListener('click', function () {
                    if (confirm('Are you sure you want to delete this board?')) {
                        newBoard.remove();
                    }
                });

                // Set up sorting for the new board
                attachSortingListeners(newBoard);

                // Set up mutation observer for task count updates
                const observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type === 'childList') {
                            updateTaskCount(newBoard);
                        }
                    });
                });

                observer.observe(newBoard, { childList: true });
            }

            popup.remove();
            boardPop = false;
        });
    });
}

AddBoard();