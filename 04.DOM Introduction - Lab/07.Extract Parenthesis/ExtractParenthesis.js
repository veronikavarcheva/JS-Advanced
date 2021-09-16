function extract(content) {
    let contentElement = document.getElementById('content');
    console.log(contentElement);

    let pattern = /\(([^()]+)\)/gm;
    let result = pattern.exec(contentElement.textContent);
    let output = [];
    while (result) {        
        output.push(result[1]);
        result = pattern.exec(contentElement.textContent);
    }
    return output.join('; ');
}