const onAddToDo = (event) => {
    const text = event.target.parentNode.querySelector('input').value;
    const newListItem = document.createElement('li');
    const liText= document.createTextNode(text);
    newListItem.appendChild(liText);
    document.querySelector('ul').appendChild(newListItem);
    }
    document.querySelector('button').addEventListener('click', onAddToDo)