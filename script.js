let input=document.getElementById("input");
let subBtn=document.getElementById("subBtn");
let ul=document.getElementById("taskList");
subBtn.addEventListener("click",function(e){ 
    e.preventDefault();
    let task=input.value;
    if(task.trim() === "")
        return;
    makeTasks(task);
    input.value="";
});
function makeTasks(content){
    let task=document.createElement("li");
    task.classList.add("task");
    task.innerHTML=`
        <span class="task-content">${content}</span>
        
        <button type="button" class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        
        <button type="button" class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;
    task.querySelector(".edit").onclick = () => enableEdit(task);
    task.querySelector(".delete").addEventListener("click", ()=> deleteTask(task));
    ul.appendChild(task);
}
function deleteTask(e) {
    e.target.closest(".task").remove();
}

function enableEdit(taskElement) {
    const span = taskElement.querySelector(".task-content");
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent.trim();
    input.classList.add("edit-input");
    
    taskElement.insertBefore(input, span);
    taskElement.removeChild(span);

    const editBtn = taskElement.querySelector(".edit");
    editBtn.textContent = "Save";
    editBtn.onclick = () => saveEdit(taskElement);
}

function saveEdit(taskElement) {
    const input = taskElement.querySelector("input.edit-input");
    const newSpan = document.createElement("span");
    newSpan.classList.add("task-content");
    newSpan.textContent = input.value.trim();

    taskElement.insertBefore(newSpan, input);
    taskElement.removeChild(input);

    const editBtn = taskElement.querySelector(".edit");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => enableEdit(taskElement);
}



