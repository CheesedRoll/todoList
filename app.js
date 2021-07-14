// VIEW

// let todos = [
//   {id: 0, todo: "공부하기", done: false },
//   {id: 1, todo:"놀기", done: false},
//   {id: 2, todo: "밥먹기", done: false}
// ];

let todos = [];

let todoContainerEl = document.querySelector(".todo-container");

function App(arrName) {
  todoEl = document.createElement("div");
  todoEl.innerHTML = '<input type="checkbox"><label>' + arrName.todo + '</label><button class="delete" id='+ arrName.id +' onclick="test(this)">Delete</button>';
  todoEl.className = 'todo';
  todoContainerEl.appendChild(todoEl);
}

let plusBtnEl = document.querySelector(".add-todo button");
// let deleteBtnEl = document.querySelector(".add-todo button.delete");
let inputEl = document.querySelector("input[type=text][name=toInput]");

//document.querySelector('.fail').innerHTML = todos.filter(function(el){el.done == true}).length;

plusBtnEl.addEventListener("click", function(){
  alert("추가 버튼이 클릭 됐습니다.");
  let newTodo = {
    id: todos.length,
    todo: inputEl.value,
    done: false
}
if (inputEl.value.length > 0){
  //    App(newTodo);
  //    todos.push(newTodo);
     addData(todos, newTodo);
     render(todos)
     inputEl.value = ""
     inputEl.focus();
 }});

// deleteBtnEl.addEventListener("click", function(){
//   alert("delete 버튼이 클릭 됐습니다.");
// });

inputEl.addEventListener('keydown', function(e){
  let newTodo = {
      id: todos.length,
      todo: inputEl.value,
      done: false
  }
 if (inputEl.value.length > 0 && e.keyCode === 13){
  //    App(newTodo);
  //    todos.push(newTodo);
     alert("추가기능 엔터.");
     addData(todos, newTodo);
     render(todos)
     inputEl.value = ""
     inputEl.focus();
 }});


// plusBtnE2.addEventListener("click", function(e){
//    var target = document.querySelector("label");
//    target.parentNode.innerHTML = "";
// });

// 

// 1. 추가
// LIST 추가 => RENDER 호출

// 2. 삭제
// LIST 삭제 => RENDER 호출

function render(list) {
// list => todo list 그리는 작업
  todoContainerEl.innerHTML="";
  list.forEach(function(el){
      App(el);
  });
}

function addData(original, newData) {
  original.push(newData);
}

function test(el) {
  console.log(el.id);
  delData(todos, el.id);
  render(todos);
}

function delData(original, id) {
  let index = original.findIndex(function(element){
    return element.id === Number.parseInt(id); 
  });
  original.splice(index, 1);
}

// function removeData(event) {
//   let { target: button } = event; // event.target
//   const li = button.parentNode;
//   todos.removeChild(li);
// }

(function() {
      let today = new Date();
      document.getElementById('time').innerText = today.toLocaleDateString();
}());