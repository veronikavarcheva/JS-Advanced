function sumTable() {
    let tableCostElements = Array.from(document.querySelectorAll('table tbody tr > td'));
    console.log(tableCostElements);
    let elementsToSum = [];
    for (let index = 0; index < tableCostElements.length - 1; index++) {
        if (index % 2 !== 0) {
            elementsToSum.push(tableCostElements[index]);
        }
    }
    console.log(elementsToSum);
    let resultElement = document.getElementById('sum');
    let sum = 0;
    elementsToSum.forEach(el => {
        sum += Number(el.textContent);
    });
    resultElement.textContent = sum;

}