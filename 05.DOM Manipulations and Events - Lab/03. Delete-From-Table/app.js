function deleteByEmail() {
    let resultElement = document.getElementById('result');
    let inputElement = document.querySelector("input[name='email']");
    let tableEmailInfo = Array.from(document.querySelectorAll('tbody tr'));

    for (let tr of tableEmailInfo) {
        console.log(tr.firstChild);
        console.log(tr.firstChild.nextElementSibling);
        console.log(tr.firstChild.nextElementSibling.nextElementSibling);

        if (tr.firstChild.nextElementSibling.nextElementSibling.textContent === (inputElement.value)) {
            tr.remove();
            resultElement.textContent = 'Deleted.';

        } else {
            resultElement.textContent = 'Not found.';
        }

    }

}
