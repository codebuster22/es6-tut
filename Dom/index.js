const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todoList = document.getElementById("todoList");

let task;

const handleInput = ({target}) => {
    task = target.value ;
};

const handleClick = () => {
    const li = document.createElement('li');
    li.innerText = task;
    todoList.appendChild(li);
    // todoList.remove();
    // todoList.removeChild( todoList.childNodes[] );
}

input.addEventListener("change", handleInput);
btn.addEventListener("click", handleClick);