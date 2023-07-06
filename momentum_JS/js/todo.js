const toDoForm = document.getElementById('todo-form');
// todoform 에 있는 input 이라고 표시하지 않으면 login 할 때 input이랑 헷갈려서?
// 값이 안 나오는듯. #todo-form을 넣어주도록 하자
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

// localStorge 저장
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 문자열로 나타내지 않고 배열로 나타냄 JSON.stringify()

// newTodo 를 ul 에 붙여서 보여주는 역할을 함
function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const btn = document.createElement('button');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
// newTodo 생성
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

// Todo 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// localStorge에 todo 값 저장
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}

/**  지금 내가 어떤 아이템을 사용하고 있는지 모른다면 무용지물이다
  forEach 는 array 의 item 에 대해 각각 함수를 실행한다 
*/
