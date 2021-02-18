function generate() {

    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.online = false;
        }

        get online() {
            return this._online;
        }

        set online(status) {
            this._online = status;

            let divs = Array.from(document.getElementsByClassName('title'));

            for (const div of divs) {
                if (div.textContent === this.firstName + ' ' + this.lastName + String.fromCharCode(8505)) {
                    if (this.online) {
                        div.classList.add('online');
                    } else if (this.online === false) {
                        div.classList.remove('online');
                    }
                }
            }
        }

        render(id) {
            const addTo = document.getElementById(id);

            const article = document.createElement('article');
            let div = document.createElement('div');
            div.setAttribute('class', 'title');
            const button = document.createElement('button');
            button.textContent = String.fromCharCode(8505);
            div.textContent = `${this.firstName} ${this.lastName}`;
            div.appendChild(button);
            const info = document.createElement('div');
            info.setAttribute('class', 'info');
            info.setAttribute('style', 'display: none');
            const first = document.createElement('span');
            first.textContent = String.fromCharCode(9742) + ` ${this.phone}`;
            const second = document.createElement('span');
            second.textContent = String.fromCharCode(9993) + ` ${this.email}`;
            info.appendChild(first);
            info.appendChild(second);
            article.appendChild(div);
            article.appendChild(info);

            addTo.appendChild(article);

            button.addEventListener('click', () => {
                info.setAttribute('style', 'display: block');
            });
        }
    }

    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

    // After 1 second, change the online status to true
    setTimeout(() => contacts[1].online = true, 1000);

}
