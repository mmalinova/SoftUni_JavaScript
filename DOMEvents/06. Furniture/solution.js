function solve() {
  const text = document.getElementsByTagName('textarea');
  const generateBtn = document.getElementsByTagName('button')[0];
  const buyBtn = document.getElementsByTagName('button')[1];
  const tbody = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', () => {
    let input = JSON.parse(text[0].value);
    let product = {};
    for (const item of input) {
      product = { ...item };
      let row = document.createElement('tr');

      let td = document.createElement('td');
      let image = createElement('img', undefined, ['src = ' + `${product.img}`]);
      //let image = document.createElement('img');
      //image.setAttribute('src', product.img);
      td.appendChild(image);
      row.appendChild(td);

      td = document.createElement('td');
      let p = createElement('p', product.name);
      td.appendChild(p);
      row.appendChild(td);

      td = document.createElement('td');
      p = createElement('p', Number(product.price));
      td.appendChild(p);
      row.appendChild(td);

      td = document.createElement('td');
      p = createElement('p', Number(product.decFactor));
      td.appendChild(p);
      row.appendChild(td);

      td = document.createElement('td');
      let input = createElement('input', undefined, ['type = checkbox']);
      td.appendChild(input);
      row.appendChild(td);

      tbody.appendChild(row);
    }


  });

  buyBtn.addEventListener('click', () => {
    const checkedBoxes = Array.from(document.getElementsByTagName('input'));

    let bought = [];
    let totalPrice = 0;
    let decFactor = 0;

    for (const item of checkedBoxes) {
      if (item.checked) {
        let tr = item.parentElement.parentElement;
        let nameOfFurniture = tr.children[1].textContent;
        totalPrice += Number(tr.children[2].textContent);
        decFactor += Number(tr.children[3].textContent);
        bought.push(nameOfFurniture);
      }
    }
    
    text[1].textContent = 'Bought furniture: ' + bought.join(', ') 
    + '\nTotal price: ' + `${totalPrice.toFixed(2)}` + '\nAverage decoration factor: '+ `${decFactor / bought.length}`;
  });

  function createElement(type, text, attributes = []) {
    let element = document.createElement(type);
    if (text) {
      element.textContent = text;
    }

    attributes
      .map(attribute => attribute.split(' = '))
      .forEach(([name, value]) => {
        element.setAttribute(name, value);
      });

    return element;
  }

}