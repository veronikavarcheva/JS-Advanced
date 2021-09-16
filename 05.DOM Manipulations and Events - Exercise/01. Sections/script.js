function create(words) {
   let contentElement = document.getElementById('content');
   words.forEach((word) => {
      let divElement = document.createElement('div');
      contentElement.appendChild(divElement);
      let pElement = document.createElement('p');
      pElement.textContent = `${word}`;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      divElement.addEventListener('click', (e) => {

         Array.from(e.target.children)[0].style.display = 'block';
      })
   });

}