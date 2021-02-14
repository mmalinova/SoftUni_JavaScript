function solve() {
  const div = document.getElementById('quizzie');

  let count = 0;
  let result = 0;

  div.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
      if (e.target.textContent === 'onclick'
        || e.target.textContent === 'JSON.stringify()'
        || e.target.textContent === 'A programming API for HTML and XML documents') {
        result++;
      }
      let currentSection = e.target.parentElement.parentElement.parentElement.parentElement;
      currentSection.style.display = 'none';
      if (count < 2) {
        let section = document.getElementsByClassName('hidden')[count++];
        section.style.display = 'block';
      } else {
        let output = document.getElementById('results');
        output.style.display = 'block';
        if (result === 3) {
          output.children[0].children[0].textContent = 'You are recognized as top JavaScript fan!';
        } else {
          output.children[0].children[0].textContent = 'You have ' + `${result}` + ' right answers';
        }
      }
    }
  });
}
