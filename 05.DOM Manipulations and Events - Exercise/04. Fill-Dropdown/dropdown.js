function addItem() {
    let buttonAdd = document.querySelector("input[type ='button']");
    console.log(buttonAdd);
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let selectMenu = document.getElementById('menu');
    let optionElement = document.createElement('option');
    optionElement.textContent = inputText;
    optionElement.value = inputValue;
    selectMenu.appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}