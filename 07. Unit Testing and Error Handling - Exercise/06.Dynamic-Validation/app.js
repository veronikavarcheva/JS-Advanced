function validate() {
    let inputEmailElement = document.getElementById('email');
    inputEmailElement.addEventListener('change', (e)=> {
        let emailPattern = /^([a-z]+@[a-z]+\.[a-z]+)$/g;
        let isValid = emailPattern.test(inputEmailElement.value);
        if(!isValid) {
            e.target.classList.add('error');
        }else {
            e.target.classList.remove('error');
        }
    });
    
}