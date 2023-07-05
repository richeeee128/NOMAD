const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

//string 만 포함된 변수는 대문자로 작성하고 string을 저장하고 싶을 때 사용함
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// 로그인 폼
function onLoginSubmit(event) {
  event.preventDefault(); //이벤트 멈초ㅑ
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  //로그인 유지
  paintGreetings(savedUsername);
}

// 유저가 처음 화면을 보면 입력값이 없기 때문에 당연히 null 이 된다.
