let input = document.querySelector("input[type = text]");
let inputContainer = document.querySelector(".input_container");
let ul = document.querySelector(".list");
let activeTodo = document.querySelector(".active");
let completedTodo = document.querySelector(".completed");
let clearCompletedTodo = document.querySelector(".clear_completed");
let item_count = document.querySelector('.item_count')
let item = document.querySelector('.item');
let todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

function view (arrayToDisplay) {
    ul.innerHTML = '';
    
    arrayToDisplay.forEach((item,index) => {
        let li = document.createElement("li");
        li.className = "li_list";
        const check = document.createElement("input");
        check.type = "checkbox";
        check.setAttribute("data-id", index);
        check.className = "check";
        check.checked = item.isDone;
        check.addEventListener("click", handleCheck);
        const p = document.createElement("p");
        p.innerText = item.text;
        const btn = document.createElement("span");
        btn.addEventListener("click" , deleteSubmit);
        btn.innerText = "x";
        btn.className = "btn del";
        btn.setAttribute("data-id", index);
        li.appendChild(check);
        li.appendChild(p);
        li.appendChild(btn);
        ul.appendChild(li);
    });
    item_count.innerText = activeLength();
    reamainingTodo();
    localStorage.setItem('todo-list', JSON.stringify(todoList));
}

function handleSubmit (event){
    console.log(event.target.value);
    if (event.keyCode === 13 && event.target.value.trim() != "") {
        const todoText = {text: '', isDone: false};
        todoText.text = input.value;
        todoList.push(todoText);
        document.querySelector(".input_container .fas").classList.add("fa-chevron-down");
        document.querySelector(".foot").classList.add("footer_container");
        event.target.value = "";
        view(todoList);
    }

}    
    function deleteSubmit (event) {
        console.log('inside delete',event)
        var id = event.target.dataset.id
        if(event.target.classList.contains("del")){
            console.log('inside delete if')
        todoList.splice(id,1);
         }
        view(todoList);
    }
    

    function handleCheck (event) {
        console.log("handle check",event);
        id = event.target.dataset.id
        todoList[id].isDone = !todoList[id].isDone;
        view(todoList)
}
    function completed () {
        console.log('inside complete')
        const isChecked = todoList.filter((item) => {
            return item.isDone == true;
        })
        view(isChecked);
}
 
    function active () {
        const isActive = todoList.filter((item) => {
            return item.isDone == false;
        })
        view(isActive);
    }
    function activeLength () {
        const isActive = todoList.filter((item) => {
            return item.isDone == false;
        })
        return isActive.length;
    }
    function all() {
    }
    function reamainingTodo () {
        const isActive = todoList.filter((item) => {
            return item.isDone == false;
        })
        return isActive.length <= 1 ? item.innerText = "item left" : item.innerText = "items left";
        }
    function completedAll (){
    }
    view(todoList);


document.addEventListener("keydown", handleSubmit);
document.querySelector('.completed').addEventListener('click',completed);
document.querySelector('.active').addEventListener('click',active);
document.querySelector('.all').addEventListener("click",all);