document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(todoText) {
        const todoItem = document.createElement('li');
        
        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;
        todoItem.appendChild(todoSpan);  

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => editTodo(todoItem, todoSpan);
        todoItem.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
            todoList.removeChild(todoItem);
        };
        todoItem.appendChild(deleteBtn);

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        todoList.appendChild(todoItem);
    }

    function editTodo(todoItem, todoSpan) {
        const newTodoText = prompt('Edit your task:', todoSpan.textContent);
        if (newTodoText !== null) {
            todoSpan.textContent = newTodoText;
        }
    }
});
