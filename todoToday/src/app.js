// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// functions
function addTodo(event){
  // prevent form from submitting by default
  event.preventDefault();

  // create a list item with a class and some innerText placeholder
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  // create a div for the li, add a class to it and append the item to the div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  todoDiv.appendChild(newTodo); 

  // save todo to local storage
  saveLocalTodos(todoInput.value);

  // create a button element, add a class, inner html for check mark make the button a child of the div
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // create a button element, add a class, inner html for trashing it make the button a child of the div
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // append the new todo div to the parent list on the document
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;

  if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement; /* need to remove the parent div, not the i */
    todo.classList.add("fall"); /* add css class which provides some animation */
    todo.addEventListener('transitionend', () => { /* when the css animation ends */
      todo.remove(); 
    });
  }

  if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed": 
        if(todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos)); // save to local storage
}

function getTodos() {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("delete-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}
