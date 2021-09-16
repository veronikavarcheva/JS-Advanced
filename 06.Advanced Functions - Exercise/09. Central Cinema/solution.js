function solve() {
    let divAddMovies = Array.from(document.querySelectorAll('#container input'));
    let inputNameAddMovie = divAddMovies[0];
    let inputHallAddMovie = divAddMovies[1];
    let inputTicketPriceAddMovie = divAddMovies[2];
    let buttonOnScreen = document.querySelector('#container button');
    let ulElementMovies = document.querySelector('#movies ul');
    let buttonClear = document.querySelector('#archive button');
    buttonClear.addEventListener('click', clearAllMovies);


    buttonOnScreen.addEventListener('click', addMovie);
    function addMovie(e) {
        e.preventDefault();

        if (inputNameAddMovie.value !== '' && inputHallAddMovie.value !== '' && !isNaN(inputTicketPriceAddMovie.value) && inputTicketPriceAddMovie.value !== '') {
            let newLi = document.createElement('li');
            ulElementMovies.appendChild(newLi);
            let spanEl = document.createElement('span');
            spanEl.textContent = inputNameAddMovie.value;
            newLi.appendChild(spanEl);
            let strongEl = document.createElement('strong');
            strongEl.textContent = `Hall: ${inputHallAddMovie.value}`;
            newLi.appendChild(strongEl);
            let newDiv = document.createElement('div');
            newLi.appendChild(newDiv);
            let strongPriceEl = document.createElement('strong');
            newDiv.appendChild(strongPriceEl);
            strongPriceEl.textContent = `${Number(inputTicketPriceAddMovie.value).toFixed(2)}`;
            let newInput = document.createElement('input');
            newInput.placeholder = 'Tickets Sold';
            // newInput.setAttribute('placeholder', 'Tickets Sold');
            newDiv.appendChild(newInput);
            let buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';
            newDiv.appendChild(buttonArchive);
            buttonArchive.addEventListener('click', archiveMovie);
            inputNameAddMovie.value = '';
            inputHallAddMovie.value = '';
            inputTicketPriceAddMovie.value = '';
        }
    };

    function archiveMovie(e) {

        let liMovie = e.target.parentElement.parentElement;
        let ticketsSoldInput = liMovie.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if ((ticketsSold !== '') && !isNaN(Number(ticketsSold))) {
            let priceStrong = liMovie.querySelector('div strong');
            let price = Number(priceStrong.textContent);
            let hallStrong = liMovie.querySelector('strong');
            let totalAmount = price * Number(ticketsSold);
            hallStrong.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
            let rightDiv = liMovie.querySelector('div');
            rightDiv.remove();
            let archiveUl = document.querySelector('#archive > ul');
            archiveUl.appendChild(liMovie);
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            liMovie.appendChild(buttonDelete);
            buttonDelete.addEventListener('click', deleteMovie);
        }
    }

    function deleteMovie(e) {
        let liElement = e.target.parentElement;
        liElement.remove();

    }

    function clearAllMovies(e) {
        let sectionArchive = e.target.parentElement;
        let ulArchive = Array.from(sectionArchive.querySelectorAll('ul li'));
        ulArchive.forEach(el => el.remove());
    }
}