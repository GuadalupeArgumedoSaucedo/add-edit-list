// Add an event listener to the form with id 'edit-todo-form' for the 'submit' event
document.getElementById('edit-todo-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    const userId = document.getElementById('user-id').value;
    const title = document.getElementById('title').value;
    const completed = document.getElementById('completed').checked;

    // Create a JavaScript object representing the todo
    const todo = {
        title: title,
        completed: completed
    };

    // Send a PUT request to update the todo using fetch API
    fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        // Check if the response is ok
        if (response.ok) {
            // If the response is ok, display success message
            document.getElementById('response-message').innerText = 'ToDo updated successfully.';
        } else {
            // If the response is not ok, display failure message
            document.getElementById('response-message').innerText = 'Failed to update ToDo.';
        }
    })
    .catch(error => {
        // If an error occurs during the fetch request, log the error and display an error message
        console.error('Error:', error);
        document.getElementById('response-message').innerText = 'An error occurred. Please try again.';
    });
});

// Add an event listener to the input field with id 'user-id' for the 'input' event
document.getElementById('user-id').addEventListener('input', function(event) {
    // Get the value from the input field
    const userId = event.target.value;
    if (userId) {
        // If user ID is not empty, fetch todo data for the given user ID
        fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
        .then(response => response.json())
        .then(data => {
            // Populate the input fields with todo data
            document.getElementById('title').value = data.title;
            document.getElementById('completed').checked = data.completed;
            // Display the todo fields and update button
            document.getElementById('todo-fields').style.display = 'block';
            document.getElementById('update-btn').style.display = 'block';
        })
        .catch(error => {
            // If an error occurs during the fetch request, log the error and display an error message
            console.error('Error:', error);
            document.getElementById('response-message').innerText = 'Failed to fetch ToDo data.';
        });
    } else {
        // If user ID is empty, hide the todo fields and update button
        document.getElementById('todo-fields').style.display = 'none';
        document.getElementById('update-btn').style.display = 'none';
    }
});
