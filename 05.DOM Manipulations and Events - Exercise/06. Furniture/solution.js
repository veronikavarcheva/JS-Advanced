function solve() {
  let textAreaInfo = Array.from(document.querySelectorAll('textarea'))[0];
  console.log(textAreaInfo);
  let textAreaResult = Array.from(document.querySelectorAll('textarea'))[1];

  let generateBtn = Array.from(document.querySelectorAll('button'))[0];
  console.log(generateBtn);
  let buyBtn = Array.from(document.querySelectorAll('button'))[1];


  generateBtn.addEventListener('click', () => {
    let tbody = document.getElementsByTagName('tbody')[0];
    let arr = JSON.parse(textAreaInfo.value);
    console.log(arr);
    arr.forEach(furniture => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', furniture.img);
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = furniture.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = furniture.price;
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = furniture.decFactor;
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);
      tbody.appendChild(tr);
    });

  });

  let totalPrice = 0;
  let boughtFurnitureArr = [];
  let totalDecFactor = 0;
  let counter = 0;
  textAreaResult.value = '';
  buyBtn.addEventListener('click', () => {
    let checkboxArr = Array.from(document.querySelectorAll("input[type='checkbox']"));
    let furnitureArr = Array.from(document.querySelectorAll('tbody tr td:nth-child(2) p'));
    let priceArr = Array.from(document.querySelectorAll('tbody tr td:nth-child(3) p'));
    let decFactorArr = Array.from(document.querySelectorAll('tbody tr td:nth-child(4) p'));

    for (let i = 0; i < checkboxArr.length; i++) {
      if (checkboxArr[i].disabled === false && checkboxArr[i].checked === true) {
        boughtFurnitureArr.push(furnitureArr[i].textContent);
        totalPrice += Number(priceArr[i].textContent);
        totalDecFactor += Number(decFactorArr[i].textContent);
        counter++;
      }
    }
    textAreaResult.value += `Bought furniture: ${boughtFurnitureArr.join(', ')}\n`;
    textAreaResult.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textAreaResult.value += `Average decoration factor: ${totalDecFactor / counter}`;

  });

}