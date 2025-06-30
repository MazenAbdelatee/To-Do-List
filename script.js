let input=document.getElementById("input");
let subBtn=document.getElementById("subBtn");
let ul=document.getElementById("taskList");
subBtn.addEventListener("click",function(e){ 
    e.preventDefault();
    let task=input.value;
    let li=document.createElement("li");
    li.innerText=task;
    li.classList.add("task")
    ul.appendChild(li);
    input.value="";
});