let input=document.getElementById('input')
let addBtn=document.getElementById('button')
let todoList=document.getElementById('todolist')

let storage=[]
addBtn.onclick=click

function click(){
    storage.push(input.value)
    console.log(storage)
    input.value = ''
    showTodos()
}

function showTodos(){
    todoList.innerHTML=''
    storage.forEach(function(todo,index){
        todoList.innerHTML += 
        "<li>"
            +todo+
            "<a onclick='edithandle("+index+")'>EditTodo</a>"+
            "<a onclick='deletehandle("+index+")'>&times</a>"+
        "</li>"
    })
}

function edithandle(index){
    let newValue=prompt('Enter new Todo')
    storage.splice(index,1,newValue)
    showTodos()
}


function deletehandle(index){
    storage.splice(index,1)
    console.log(showTodos)
    showTodos()
}









