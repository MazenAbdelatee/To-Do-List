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
        <button type="button" class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;
    task.querySelector(".delete").addEventListener("click", function(e){
        deleteTask(e);
    });
    ul.appendChild(task);
}
function deleteTask(e) {
    e.target.closest(".task").remove();
}