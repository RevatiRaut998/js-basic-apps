const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = taskText;
    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear the input box
  }
});
