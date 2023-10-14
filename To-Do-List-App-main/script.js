const inputBox = document.getElementById("add-task");
const TaskContainer = document.getElementById("tasks-container");

function OnBtnClick() {
    if(inputBox.value === "") {
        alert("You must write something pal!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        TaskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

TaskContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", TaskContainer.innerHTML);
}

function getData() {
    TaskContainer.innerHTML = localStorage.getItem("data");
}

getData();