function validate() {
    let inputEmailElement = document.getElementById('email');
    inputEmailElement.addEventListener('change', (event) => {
        let email = inputEmailElement.value;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gim;
        let isTrue = pattern.test(email);
        if (isTrue) {                       
            event.target.classList.remove('error');
            // event.target.className = '';
        } else {
            event.target.classList.add('error');
            //event.target.className = 'error';
        }
    });

}