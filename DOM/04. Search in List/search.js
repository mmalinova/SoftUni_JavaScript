function search() {
   let towns = document.getElementById('towns').getElementsByTagName('li');
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let matches = 0;
   for (const town of towns) {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   result.textContent = `${matches} matches found`;
}
