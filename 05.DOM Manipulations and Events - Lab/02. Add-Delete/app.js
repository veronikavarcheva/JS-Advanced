function addItem() {
    let listElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = inputElement.value;
    let hrefElement = document.createElement('a');
    hrefElement.textContent = '[Delete]';
    hrefElement.setAttribute('href', '#');
    newLi.appendChild(hrefElement);

    hrefElement.addEventListener('click', (e) => {
        let hrefParentElement = e.target.parentElement;
        hrefParentElement.remove();
    })
    listElement.appendChild(newLi);
    inputElement.value = '';
}