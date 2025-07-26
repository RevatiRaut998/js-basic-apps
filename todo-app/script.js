const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const LOCAL_STORAGE_KEY = 'todoItems';

// Load tasks from LocalStorage on page load
window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  tasks.forEach(task => {
    addTaskToDOM(task);
  });
};

// Add button click
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTaskToDOM(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = '';
  }
});

function addTaskToDOM(taskText) {
  const listItem = document.createElement('li');
  listItem.innerText = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.style.marginLeft = '10px';

  deleteBtn.addEventListener('click', () => {
    listItem.remove();
    removeTaskFromLocalStorage(taskText);
  });

  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);
}

function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  tasks.push(task);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}
