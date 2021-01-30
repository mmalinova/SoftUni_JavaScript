function solve() {
  let text = document.getElementById('input').value;
  let result = document.getElementById('output');

  let sentences = text.split('\.').filter(sentence => sentence.trim().length >= 1);

  for (let i = 0; i < sentences.length; i += 3) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
      if (sentences[i + j]) {
        arr.push(sentences[i + j]);
      }
    }
    let paragraph = document.createElement('p');
    paragraph.textContent = arr.join('. ') + '.';
    result.appendChild(paragraph);
  }
}