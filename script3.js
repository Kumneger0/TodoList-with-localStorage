const List = document.getElementById('ul');
const input = document.getElementById('Todo');
const btnSubmit = document.getElementById('submit');
tasks();
let arr = Array.from(JSON.parse(localStorage.tasks));

btnSubmit.addEventListener("click", ()=> {
  if (input.value != "") {
    const btnEdit = document.createElement("button")
    btnEdit.classList.add("editorButton")
    btnEdit.textContent = "edit";
    const span = document.createElement("span");
    const li = document.createElement("li");
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("deleteButton")
    btnDelete.textContent = "del";
    span.innerHTML = input.value;
    span.classList.add("Todos")
    arr.push(input.value);
    storage(arr);
    li.appendChild(span);
    li.appendChild(btnEdit)
    li.appendChild(btnDelete);
    List.appendChild(li);
    input.value = "";
    btnEdit.onclick = () => {
      let edited = window.prompt("Edit Your Todo")
      if(edited != ""){
         if(!edited) return
      li.firstChild.textContent = edited;
      afterDeletion();
      }else{
        alert("Not allowed to leave empty")
      }
    }
    btnDelete.addEventListener("click", ()=> {
      li.remove();
      afterDeletion();
    });
  } else {
    alert("Please enter Todo");
  }});

function storage(Todo) {
  localStorage.tasks = JSON.stringify(Todo);
}

function tasks() {
  if(localStorage.tasks == null ||localStorage.tasks== undefined){
  let forNew = [" "]
  localStorage.tasks = JSON.stringify(forNew)
  }else{
    
  }
  JSON.parse(localStorage.tasks).forEach(element=> {
    if(element != " "){
    const btnEdit = document.createElement("button")
    btnEdit.classList.add("editorButton")
    btnEdit.textContent = "edit"
    const span = document.createElement("span");
    span.textContent = element;
    span.classList.add("Todos")
    const li = document.createElement("li");
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("deleteButton")
    btnDelete.textContent = "del";
    li.appendChild(span);
    li.appendChild(btnEdit)
    li.appendChild(btnDelete);
    List.appendChild(li);
    btnEdit.onclick = () => {
// edit todo which recovered from localStorage don't be confused with line 27
      const edited = window.prompt("Edit Your Todo");
      if(edited != ""){
        if(!edited) return
      li.firstChild.textContent = edited;
      afterDeletion();
      }else{
        alert("not allowed to leave empty")
      }
    }
    btnDelete.onclick = () => {
      //delete todo which recovered from localStorage
      li.remove();
      afterDeletion();
    };
 }});
}
function afterDeletion() {
  let remaingTodo = [];
  const span = document.querySelectorAll('span');
  span.forEach(element => {
    remaingTodo.push(element.textContent);
  });
  localStorage.tasks = JSON.stringify(remaingTodo);
}
