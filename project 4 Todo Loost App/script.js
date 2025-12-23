const taskForm = document.querySelector('.todo-form');
const taskInput = document.querySelector('.taskinput');
const taskList = document.querySelector('.taskList');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement('li');
    li.classList.add('task');

    li.innerHTML = `
        <img src="uncheck.png" class="checkbox">
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

taskList.addEventListener('click', function(e) {
    if(e.target.classList.contains('checkbox')) {
        const img = e.target;
        if(img.src.includes("uncheck.png")) {
            img.src = "check.png";
        } else {
            img.src = "uncheck.png";
        }
    }
});

taskList.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
function white(){
    document.querySelector('.taskinput').style.backgroundColor="white";
}
