alert("Купить Пивасик и закусон");

let balanceString = window.prompt("Сколька мани на кормане?");
let balance = window.Number(balanceString);

if (window.isNaN(balance)) {
  alert("Это не число, даун");
}

//Пиво

let product1PriceString = window.prompt("Почем пивасик?");
let product1Price = window.Number(product1PriceString);

if (window.isNaN(product1Price)) {
  alert("Это не число, даун");
} else {
  balance = balance - product1Price;
}

//Чипсы

let product2PriceString = window.prompt("Почем чипсоны?");
let product2Price = window.Number(product2PriceString);

if (window.isNaN(product2Price)) {
  alert("Это не число, даун");
} else {
  balance = balance - product2Price;
}

//Криветки

let product3PriceString = window.prompt("Почем криветосы?");
let product3Price = window.Number(product3PriceString);

if (window.isNaN(product3Price)) {
  alert("Это не число, даун");
} else {
  balance = balance - product3Price;
}

//Завершение
if (balance >= 0) {
  alert("Пора бухать");
  alert("Ваш баланс" + " " + balance);
} else {
  alert("Бабосиков нет");
}

alert("Операция завершина");
