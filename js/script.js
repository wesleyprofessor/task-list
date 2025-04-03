document.addEventListener("DOMContentLoaded", loadTask())

function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Digite uma tarefa válida!")
        return;
    }

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    taskList.push(taskText);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    taskInput.value = "";
    loadTask();
}

function deleteTask(index){
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));

    loadTask();
    
}

function loadTask(){
    let listItems = document.getElementById("listItems");
    listItems.innerHTML = "";

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.forEach((item, index) => {
        let li  = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center task-list-item mb-2";

        let span = document.createElement("span");
        span.textContent = item;

        let div = document.createElement("div");

        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        editButton.className = "btn btn-primary btn-sm";
        deleteButton.className = "btn btn-danger btn-sm";

        editButton.textContent = "Editar";
        deleteButton.textContent = "Deletar";

        deleteButton.onclick = () => deleteTask(index);

        div.appendChild(editButton);
        div.appendChild(deleteButton);

        li.appendChild(span);
        li.appendChild(div);    
        
        listItems.appendChild(li);
    });



}