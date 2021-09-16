function extractText() {
    let ulElement = document.getElementById('items');
    let textareaElement = document.getElementById('result');
    // let buttonElement = document.getElementsByTagName('button')[0];
    textareaElement.value = ulElement.textContent;
}