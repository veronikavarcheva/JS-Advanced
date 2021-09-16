function lockedProfile() {
    let divProfileElements = Array.from(document.querySelectorAll('.profile'));
    console.log(divProfileElements);

    divProfileElements.forEach(profile => {

        let button = profile.querySelector('button');
        console.log(button);

        button.addEventListener('click', (e) => {
            let input = profile.querySelectorAll("input[type='radio']")[1];
            if (e.target.textContent === 'Show more' && input.checked) {
                e.target.previousElementSibling.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if (e.target.textContent === 'Hide it' && input.checked) {
                e.target.previousElementSibling.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        });
    });
}