const onAddToDo = (event) => {
    const text = event.target.parentNode.querySelector('input').value;
    const newListItem = document.createElement('li');
    const liText= document.createTextNode(text);
    newListItem.appendChild(liText);
    document.querySelector('ul').appendChild(newListItem);
    }
    document.querySelector('button').addEventListener('click', onAddToDo)

    const listItems = document.querySelectorAll('li');
    const addCompleted = (event) => {
    event.target.classList.toggle('completed')
    }
    for(const li of listItems){
    li.addEventListener('click', addCompleted)
    }
  