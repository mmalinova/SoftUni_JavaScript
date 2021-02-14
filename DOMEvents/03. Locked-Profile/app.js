function lockedProfile() {
    const container = document.getElementById('container');
    container.addEventListener('click', information);

    function information(e) {
        if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'INPUT') {
            const parent = e.target.parentElement;
            if (e.target.innerHTML === 'Show more') {
                const radio = Array.from(parent.children)[4];
                if (radio.checked) {
                const div = Array.from(parent.children)[9];
                div.style.display = 'block';
                e.target.innerHTML = 'Hide it';
                }
            } else if (e.target.innerHTML === 'Hide it') {
                const radio = Array.from(parent.children)[4];
                if (radio.checked) {
                const div = Array.from(parent.children)[9];
                div.style.display = 'none';
                e.target.innerHTML = 'Show more';
                }
            }
        }
    }
}