function attachGradientEvents() {
    let divGradientElement = document.getElementById('gradient');
    let divResultElement = document.getElementById('result');
    let divGradientBoxElement = document.getElementById('gradient-box');

    divGradientBoxElement.addEventListener('mouseout', () => {
        divResultElement.textContent = '';
    });
    divGradientElement.addEventListener('mousemove', (event) => {
        console.log(event);
        console.log(event.target);
        let power = event.offsetX / (event.target.clientWidth);
        power = Math.trunc(power * 100);
        divResultElement.textContent = `${power}%`;

    });
}