const throttle = require('lodash.throttle');
const newTaskInput = document.querySelector('#newTask');
const todoList = document.querySelector('.todo-list');
const clearListBtn = document.querySelector('#clearList');
const form = document.querySelector('.newtask-box');
const characterCounter = document.querySelector('#char_count');
const STORAGE_KEY = 'task-state';
const MAXNUMOFCHARS = 100;

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
  if (newTaskInput.value.length <= 100) {
    countCharacters();
  }

  if (e.key !== 'Enter') return;
  characterCounter.textContent = '100/100';
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
      <p class="${state}">${value}</p>
      <div class="task-item__wrapper">
      <input type="button" class="confirmTask" data-taskId=${index} value="Completed">
      <input type="button" class="deleteTask" data-taskId=${index} value="Delete">
      </div>
    </li>`
    );
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

const countCharacters = () => {
  let numOfEnteredChars = newTaskInput.value.length;
  let counter = MAXNUMOFCHARS - numOfEnteredChars;
  characterCounter.textContent = counter + '/100';
};
