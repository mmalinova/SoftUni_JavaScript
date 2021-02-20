function solve() {
    let author = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');

    let sections = Array.from(document.querySelectorAll('section'));

    const archiveSection = sections[3];
    const ol = archiveSection.children[1];

    let createBtn = document.getElementsByClassName('btn create')[0];

    createBtn.addEventListener('click', addArticle);

    function addArticle(e) {
        e.preventDefault();

        let articleSection = sections[1];

        let article = createEl('article');
        let h1 = createEl('h1', title.value);
        let firstP = createEl('p', 'Category:');
        let firstStrong = createEl('strong', category.value);
        firstP.appendChild(firstStrong);
        let secondP = createEl('p', 'Creator:');
        let secondStrong = createEl('strong', author.value);
        secondP.appendChild(secondStrong);
        let thirdP = createEl('p', content.value);

        let divBtn = createEl('div', null, ['class = buttons']);
        let deleteBtn = createEl('button', 'Delete', ['class = btn delete']);
        let archiveBtn = createEl('button', 'Archive', ['class = btn archive']);
        divBtn.appendChild(deleteBtn);
        divBtn.appendChild(archiveBtn);

        article.appendChild(h1);
        article.appendChild(firstP);
        article.appendChild(secondP);
        article.appendChild(thirdP);
        article.appendChild(divBtn);

        articleSection.appendChild(article);

        archiveBtn.addEventListener('click', move);
        deleteBtn.addEventListener('click', remove);
    }

    function move(e) {
        let article = e.target.parentNode.parentNode;

        let title = article.children[0].textContent;

        e.target.parentNode.parentNode.remove();

        let li = createEl('li', title);
        ol.appendChild(li);

        sort();
    }

    function remove(e) {
        e.target.parentNode.parentNode.remove();
    }

    function sort() {
        Array
            .from(ol.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(o => ol.appendChild(o));
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
