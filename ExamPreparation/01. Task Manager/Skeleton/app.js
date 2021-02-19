function solve() {
    const addBtn = document.getElementById('add');
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');
    const sections = Array.from(document.getElementsByTagName('section'));

    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        if (!taskInput.value || !descriptionInput.value || !dateInput.value) {
            return;
        }

        const openSection = sections[1];
        let openDiv = Array.from(openSection.children)[1];

        let article = createEl('article');
        const title = createEl('h3', taskInput.value);
        const desc = createEl('p', 'Description: ' + descriptionInput.value);
        const date = createEl('p', 'Due Date: ' + dateInput.value);
        const divFlex = createEl('div', null, ['class = flex']);
        const startBtn = createEl('button', 'Start', ['class = green']);
        const deleteBtn = createEl('button', 'Delete', ['class = red']);

        divFlex.appendChild(startBtn);
        divFlex.appendChild(deleteBtn);

        article.appendChild(title);
        article.appendChild(desc);
        article.appendChild(date);
        article.appendChild(divFlex);

        openDiv.appendChild(article);

        startBtn.addEventListener('click', move);
        deleteBtn.addEventListener('click', remove);
    }

    function move(e) {
        const progressDiv = document.getElementById('in-progress');

        let article = e.target.parentNode.parentNode;

        let divFlex = Array.from(article.children)[3];

        const deleteBtn = createEl('button', 'Delete', ['class = red']);
        const finishBtn = createEl('button', 'Finish', ['class = orange']);

        divFlex.appendChild(deleteBtn);
        divFlex.appendChild(finishBtn);
        
        progressDiv.appendChild(article);
        divFlex.children[0].remove();
        divFlex.children[0].remove();

        deleteBtn.addEventListener('click', remove);
        finishBtn.addEventListener('click', finish);
    }

    function remove(e) {
        e.target.parentNode.parentNode.remove();
    }

    function finish(e) {

        const completeSection = sections[3];
        const completeDiv = Array.from(completeSection.children)[1];

        let article = e.target.parentNode.parentNode;
        
        completeDiv.appendChild(article);

        let divFlex = Array.from(article.children)[3].remove();
    }

    function createEl(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        if (attributes) {
            for (const attribute of attributes) {
                let [name, value] = attribute.split(' = ');
                element.setAttribute(name, value);
            }
        }

        return element;
    }
}