fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        let Ids = '';

        // Loop through each todo and append the userId to the string
        todos.map(todo => {
            Ids += todo.id + ' ' + todo.title + '<br>';  // Add each userId with a line break
        });

        // Set the innerHTML of the element to the concatenated string
        document.getElementById("action").innerHTML = Ids;
    })
    .catch(error => console.error('Error fetching data:', error));  // Add error handling
