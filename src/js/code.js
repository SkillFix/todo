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
  submitData();
});

function submitData() {
  characterCounter.textContent = `100/100`;
  let data = getListFromLS();

  if (!data) {
    data = [];
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
      </div>
    </li>`
    );
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
