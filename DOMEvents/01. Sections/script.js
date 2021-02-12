function create(words) {
   const div = document.getElementById('content');
   for (const str of words) {
      let myDiv = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = str;
      paragraph.style.display = 'none';
      myDiv.appendChild(paragraph);
      myDiv.addEventListener('click', function(){paragraph.style.display = 'block';}, false);
      div.appendChild(myDiv);
   }
}