function solve() {
    let moviesOnScreen = document.querySelector('#movies ul');
    let archiveUl = document.querySelector('#archive ul');
    let addNewMovieContainer = document.querySelector('#container');
    let onScreenBtn = addNewMovieContainer.children[3];
    let clearArchiveButton = document.querySelector('#archive>button');

    clearArchiveButton.addEventListener('click', () => {
        archiveUl.innerHTML = '';
    });

    function createElement(type, value) {
        let text = document.createTextNode(value);
        let element = document.createElement(type);
        element.appendChild(text);
        return element;
    }

    function onScreenBtnClick(ev) {
        ev.preventDefault();

        let nameField = addNewMovieContainer.children[0];
        let hallField = addNewMovieContainer.children[1];
        let ticketPriceField = addNewMovieContainer.children[2];

        if (nameField.value !== '' && hallField.value !== '' && ticketPriceField.value !== '' && Number.isNaN(Number(ticketPriceField.value)) === false) {
            let name = createElement('span', nameField.value);
            let hall = createElement('strong', `Hall: ${hallField.value}`);
            let price = createElement('strong', Number(ticketPriceField.value).toFixed(2));
            let cntInput = document.createElement('input');
            cntInput.placeholder = 'Tickets Sold';
            let archiveBtn = createElement('button', 'Archive');
            let div = document.createElement('div');
            div.appendChild(price);
            div.appendChild(cntInput);
            div.appendChild(archiveBtn);

            let newLiElement = document.createElement('li');
            newLiElement.appendChild(name);
            newLiElement.appendChild(hall);
            newLiElement.appendChild(div);
            moviesOnScreen.appendChild(newLiElement);

            nameField.value = '';
            hallField.value = '';
            ticketPriceField.value = '';
        }
    }

    onScreenBtn.addEventListener('click', onScreenBtnClick);

    function onClickArchiveMovieBtn(ev) {
        if (ev.target.tagName === 'BUTTON') {
            let movieToArchive = ev.target.parentElement.parentElement;
            let ticketsSold = movieToArchive.querySelector('div input');
            if (ticketsSold.value !== '' && Number.isNaN(Number(ticketsSold.value)) === false) {
                let ticketPrice = Number(ev.target.parentElement.children[0].textContent);
                let totalPrice = Number(ticketsSold.value) * ticketPrice;
                movieToArchive.removeChild(movieToArchive.querySelector('div'));
                movieToArchive.children[1].textContent = `Total amount: ${totalPrice.toFixed(2)}`;
                let deleteMovieBtn = createElement('button', 'Delete');
                movieToArchive.appendChild(deleteMovieBtn);
                archiveUl.appendChild(movieToArchive);
            }
        }
    }

    moviesOnScreen.addEventListener('click', onClickArchiveMovieBtn);

    function deleteMovieFromArchiveBtn(ev) {
        if (ev.target.tagName === 'BUTTON') {
            ev.target.parentElement.remove();
        }
    }

    archiveUl.addEventListener('click', deleteMovieFromArchiveBtn);
}