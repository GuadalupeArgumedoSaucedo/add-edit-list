// When the 'new-todo-form' is submitted, do this:
document.getElementById('new-todo-form').addEventListener('submit', function(event) {
    // Stop the form from doing its normal action
    event.preventDefault();

    // Get the values from the form fields
    const userId = document.getElementById('userId').value;
    const title = document.getElementById('title').value;
    const completed = document.getElementById('completed').value === 'true';

    // Make a new todo object with those values
    const todo = {
        userId: userId,
        title: title,
        completed: completed
    };

    // Send the todo to a function to add it
    addTodo(todo)
        .then(handleResponse) // If adding succeeds, show the response
        .catch(error => { // If adding fails, show an error message
            console.error('Error:', error);
            document.getElementById('response-message').innerText = 'An error occurred. Please try again.';
        });
});

// Function to add a todo by sending it to a server
function addTodo(todo) {
    // Send the todo to a specific URL as a POST request
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST', // Use the POST method
        headers: {
            'Content-Type': 'application/json' // Send the data as JSON
        },
        body: JSON.stringify(todo) // Convert the todo object to JSON and send it
    });
}

// Function to handle the response after adding a todo
function handleResponse(response) {
    return response.json() // Convert the response to JSON
        .then(data => { // If conversion succeeds, show a success message
            const message = `ToDo added with ID: ${data.id}`;
            document.getElementById('response-message').innerText = message;
        })
        .catch(error => { // If conversion fails, show an error message
            console.error('Error:', error);
            document.getElementById('response-message').innerText = 'An error occurred. Please try again.';
        });
}

// Add an event listener to the cancel button
document.getElementById('cancel-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to home page
});
