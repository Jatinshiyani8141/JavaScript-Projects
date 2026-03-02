/* This function gets the tasks from localStorage */
function get_todos() {
    var todos = []; // create an array
    var todos_str = localStorage.getItem('todo'); // get saved tasks
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); // convert JSON string to array
    }
    return todos;
}

/* This function adds the inputted task to localStorage */
function add() {
    var task = document.getElementById('task').value.trim();
    if (task === '') return false; // prevent empty tasks

    var todos = get_todos();
    todos.push(task); // add new task
    localStorage.setItem('todo', JSON.stringify(todos)); // save tasks
    document.getElementById("task").value = ""; // clear input
    show(); // refresh the displayed list
    return false;
}

/* This function displays tasks on the screen */
function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + 
                ' <button class="remove" data-id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    // Add event listeners to remove buttons
    var removeButtons = document.getElementsByClassName('remove');
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function() {
            var id = this.getAttribute('data-id');
            remove(id);
        });
    }
}

/* This function removes a task */
function remove(id) {
    var todos = get_todos();
    todos.splice(id, 1); // remove the task at index id
    localStorage.setItem('todo', JSON.stringify(todos)); // save updated array
    show(); // refresh the displayed list
}

/* Add task on button click */
document.getElementById('add').addEventListener('click', add);

/* Show tasks on page load */
show();