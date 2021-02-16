function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', () => {
        let regex = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/gm;
        if (!regex.test(input.value)) {
            input.classList.add('error');
        } else {
            input.removeAttribute('class');
        }
    });
}