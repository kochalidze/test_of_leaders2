const form = document.querySelector("form");
const ul = document.querySelector("ul");

let item = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const tesk = form.task.value;

    const li = document.createElement("li");

    li.textContent = tesk;

    li.id = `task${item}`;
    item++

    ul.appendChild(li);

    li.addEventListener("click", function() {
        ul.removeChild(li)
    });

    todoList.appendChild(li);
    inputMode.value = "";
})