function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let searchItem = document.getElementById('searchField');
   let rows = Array.from(document.getElementsByTagName('tr'));

   function onClick() {
      for (let i = 2; i < rows.length; i++) {
         for (let j = 0; j < 3; j++) {
            if (rows[i].children[j].innerText.includes(searchItem.value)) {
               rows[i].setAttribute("class", "select");
               break;
            } else {
               rows[i].setAttribute("class", "");
            }
         }
      }
   }
}