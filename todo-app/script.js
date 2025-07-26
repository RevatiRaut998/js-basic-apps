const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.style.marginLeft = '10px';

    // Event listener for delete button
    deleteBtn.addEventListener('click', () => {
      listItem.remove(); // removes the task from the list
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});
