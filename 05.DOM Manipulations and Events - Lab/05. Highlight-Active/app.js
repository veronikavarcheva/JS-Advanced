function focused() {
    let inputs = Array.from(document.querySelectorAll("input[type='text']"));
    inputs.forEach(input => {

        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}