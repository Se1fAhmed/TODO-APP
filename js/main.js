let inputData = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let noTasks = document.getElementById('noTasks');
let Tasks = document.getElementById('Tasks');
let addTask = ()=> {
taskData = inputData.value;
if(taskData.trim()==""){
    alert("You Must Enter Data");
}
else if(inputData.value.length < 3){
    alert("You Must Enter Data bigger than 3");
}
else{
    noTasks.remove();
    Tasks.innerHTML += `
    <div class="alert alert-info pb-4">
    ${taskData}
    <div class="float-right  ">
    <button class="btn btn-danger ">Remove</button>
    <button class="btn btn-success ">Done</button>
    </div>
    </div>
    `;
    inputData.value="";
}

}
addBtn.addEventListener('click',addTask)
