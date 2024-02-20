//С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”
  let ul = document.querySelector('ul')
for(i=0;i<ul.length;i=+2){
  let ull = ul[i]
  ull.classList('item')
}

let aaa = document.querySelectorAll('a')
for(i=0;i<aaa.length;i=+2){
    let aa = aaa[i]
    aa.classList('custom-link')
  }
