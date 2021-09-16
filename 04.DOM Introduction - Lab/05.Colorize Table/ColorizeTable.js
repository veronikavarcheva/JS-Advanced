function colorize() {
    let tableRowElements = Array.from(document.querySelectorAll('table tr'));
    console.log(tableRowElements);

    let headings = tableRowElements.shift();
    let index = 0;
    tableRowElements.forEach((row) => {

        if (index % 2 === 0) {
            row.style.backgroundColor = 'teal';
        }
        index++;
    });
}