const throttle = require('lodash.throttle');
const newTaskInput = document.querySelector('#newTask');
const todoList = document.querySelector('.todo-list');
const clearListBtn = document.querySelector('#clearList');
const STORAGE_KEY = 'task-state';
const form = document.querySelector('.newtask-box');

newTaskInput.addEventListener('input', throttle(saveData, 500));

if (localStorage.getItem(STORAGE_KEY)) {
  getData();
}

function saveData() {
  let newTask = this.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ newTask }));
}

function getData() {
  const dataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));

  try {
    for (let key in dataParse) {
      form[key].value = dataParse[key];
    }
  } catch (error) {
    console.log('error', error);
  }
}

newTaskInput.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  let data = JSON.parse(localStorage.getItem('todoList'));
  if (!data) {
    data = [];
  }

  data.push({
    value: e.target.value,
    state: 'pending',
  });
  const jsonData = JSON.stringify(data);
  localStorage.setItem('todoList', jsonData);
  e.target.value = '';

  updateToDoList();
});

function updateToDoList() {
  todoList.innerHTML = '';
  const localData = JSON.parse(localStorage.getItem('todoList'));

  localData.forEach(({ value, state }, index) => {
    todoList.insertAdjacentHTML(
      'beforeend',
      `
      <li class="task-item">
      <span class="${state}">${value}</span>
      <div class="task-item__wrapper">
      <input type="button" class="confirmTask" data-taskId=${index} value="Completed">
      <input type="button" class="deleteTask" data-taskId=${index} value="Delete">
      </div>
    </li>`
    );
    // const li = document.createElement('li');
    // const span = document.createElement('span');
    // const btnConfirm = document.createElement('button');
    // const btnRemove = document.createElement('button');

    // btnConfirm.textContent = 'Done';
    // btnConfirm.id = 'confirmTask';

    // btnRemove.textContent = 'Remove';
    // btnRemove.id = 'removeTask';

    // span.textContent = task;

    // li.append(span)
    // li.append(btnConfirm)
    // li.append(btnRemove);

    // listRef.append(li);
  });
}
updateToDoList();

clearListBtn.addEventListener('click', () => {
  localStorage.setItem('todoList', '[]');
  updateToDoList();
});

todoList.addEventListener('click', e => {
  if (e.target.className === 'deleteTask') {
    deleteTask(e.target.dataset.taskid);
  }

  if (e.target.className === 'confirmTask') {
    completeTask(e.target.dataset.taskid);
  }
});
const completeTask = id => {
  const data = JSON.parse(localStorage.getItem('todoList'));

  data[id] = {
    ...data[id],
    state: 'done',
  };

  localStorage.setItem('todoList', JSON.stringify(data));
  updateToDoList();
};
const deleteTask = id => {
  const data = JSON.parse(localStorage.getItem('todoList'));
  data.splice(id, 1);

  localStorage.setItem('todoList', JSON.stringify(data));
  updateToDoList();
};
