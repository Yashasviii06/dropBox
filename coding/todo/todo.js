const input_data=  document.getElementById('input');
const btn = document.getElementById('add');
const list_todo = document.getElementById('list');

btn.addEventListener('click',addnewlist);

function addnewlist(){
    var newtxt = input_data.value ;
    if(newtxt!== ''){
       const  list = document.createElement('li');
        list.textContent = newtxt;
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
             deleteButton.addEventListener('click',deletetask);
             list.appendChild(deleteButton);
             list_todo.appendChild(list);
        input_data.value = '';
    }
}
function deletetask(){
    const list_todo =this.parentNode;
    list.removeChild(list_todo);
}