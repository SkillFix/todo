const throttle = require('lodash.throttle');
const newTaskInput = document.querySelector('#newTask');
const todoList = document.querySelector('.todo-list');
const clearListBtn = document.querySelector('#clearList');
const form = document.querySelector('.newtask-box');
const characterCounter = document.querySelector('#char_count');
const submitBtn = document.querySelector('#submit');
const STORAGE_KEY_INPUT = 'task-state';
const MAXNUMOFCHARS = 100;

function getListFromLS() {
  if (localStorage.getItem('todoList') == undefined) {
    return [];
  }
  return JSON.parse(localStorage.getItem('todoList'));
}

function showСlearButton() {
  const lengthStorage = getListFromLS().length;
  if (lengthStorage > 0) {
    clearListBtn.style.display = 'block';
  } else {
    clearListBtn.style.display = 'none';
  }
}
showСlearButton();

submitBtn.addEventListener('click', submitData);
newTaskInput.addEventListener('input', throttle(saveData, 500));

if (localStorage.getItem(STORAGE_KEY_INPUT)) {
  getData();
}

function saveData() {
  let newTask = newTaskInput.value;
  localStorage.setItem(STORAGE_KEY_INPUT, JSON.stringify({ newTask }));
}

function getData() {
  const dataParse = JSON.parse(localStorage.getItem(STORAGE_KEY_INPUT));

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

  if (e.key !== 'Enter') {
    return;
  }
  if (newTaskInput.value.length < 1) {
    preventdefault();
  }
  submitData();
});

function submitData() {
  characterCounter.textContent = `100/100`;
  let data = getListFromLS();

  if (!data) {
    data = [];
  }

  if (newTaskInput.value.length < 1) {
    preventdefault();
  }
  data.push({
    value: newTaskInput.value,
    state: 'pending',
  });
  const jsonData = JSON.stringify(data);
  localStorage.setItem('todoList', jsonData);
  newTaskInput.value = '';

  updateToDoList();
}

function updateToDoList() {
  todoList.innerHTML = '';
  const localData = getListFromLS();
  showСlearButton();
  localData.forEach(({ value, state }, index) => {
    todoList.insertAdjacentHTML(
      'beforeend',
      `
      <li class="task-item">
      <p class="${state}">${value}</p>
      <div class="task-item__wrapper">
      <input type="button" class="editTask" data-taskId=${index} value="Edit task">
      <input type="button" class="confirmTask" data-taskId=${index} value="Completed">
      <input type="button" class="deleteTask" data-taskId=${index} value="Delete">

      <button type="button" class="showBtn">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class='menu' width="30px" height="30px">
      <symbol id="menu" viewBox="0 0 32 32">
      <path d="M11.15 0.9c-5.45 1.95-8.9 5.6-10.5 11.050-1.45 5.1 0.2 11.4 4.1 15.3 6.1 6.050 16.4 6.050 22.5 0 4.55-4.6 5.9-12.050 3.2-17.8-3.45-7.3-12.050-11.15-19.3-8.55zM23.85 9.3c0.5 1.4-0.9 1.7-7.85 1.7s-8.35-0.3-7.85-1.7c0.25-0.7 1.4-0.8 7.85-0.8s7.6 0.1 7.85 0.8zM23.75 16c0 0.65-1.2 0.75-7.45 0.9-7.2 0.1-8.8-0.15-8.050-1.35 0.2-0.4 2.75-0.55 7.9-0.45 6.35 0.15 7.6 0.25 7.6 0.9zM23.45 21.45c0.4 0.25 0.55 0.8 0.4 1.25-0.25 0.7-1.4 0.8-7.85 0.8s-7.6-0.1-7.85-0.8c-0.15-0.45 0-1 0.4-1.25 0.9-0.55 14-0.55 14.9 0z"></path>
      </symbol>
      <use xlink:href="#menu"/>
      </svg>
      </button>
      </div>
    </li>`
    );
    localStorage.setItem(STORAGE_KEY_INPUT, '[]');
  });
}
updateToDoList();

clearListBtn.addEventListener('click', () => {
  localStorage.setItem('todoList', '[]');
  updateToDoList();
  showСlearButton();
});

todoList.addEventListener('click', e => {
  if (e.target.className === 'deleteTask') {
    deleteTask(e.target.dataset.taskid);
  }

  if (e.target.className === 'confirmTask') {
    completeTask(e.target.dataset.taskid);
  }

  if (e.target.className === 'editTask') {
    newTaskInput.value = getListFromLS()[e.target.dataset.taskid].value;
    deleteTask(e.target.dataset.taskid);
  }
});

const completeTask = id => {
  const data = getListFromLS();

  data[id] = {
    ...data[id],
    state: 'done',
  };

  localStorage.setItem('todoList', JSON.stringify(data));
  updateToDoList();
};

const deleteTask = id => {
  const data = getListFromLS();
  data.splice(id, 1);

  localStorage.setItem('todoList', JSON.stringify(data));
  updateToDoList();
  showСlearButton();
};

const countCharacters = () => {
  let numOfEnteredChars = newTaskInput.value.length;
  let counter = MAXNUMOFCHARS - numOfEnteredChars;
  characterCounter.textContent = counter + '/100';
};
