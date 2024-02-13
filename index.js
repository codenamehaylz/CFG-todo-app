const todos = [];

// { title: string, completed: boolean }

function addTodo() {
    const inputTodoElement = document.querySelector('#inputTodo');
    const title = inputTodoElement.value.trim();
    if (title) {
        todos.push({title, completed: false});
        renderTodos();
    };
};

function renderTodos() {
    const todoListElement = document.querySelector('#todoList');
    todoListElement.innerHTML = "";
    todos.forEach((todo, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `
            <p>${todo.title}</p>
            <p>${todo.completed ? "Completed" : "Pending"}</p>
            <button onclick="toggleTodo(${index})">Toggle</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoListElement.appendChild(listElement);
    });
};

// delete todo function
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
};

// toggle todo function
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
};