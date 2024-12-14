// Задачки по добавлению и удалению элементов.
// const newDiv=document.createElement("div");
// newDiv.textContent="Новый блок";
// newDiv.setAttribute("class","container");
// console.log(newDiv);
// console.log(newDiv.getAttribute("class"));

// const container=document.getElementById("container");
// const appendElem=document.createElement("p");
// appendElem.textContent="Добавлено через append";
// container.append(appendElem);

// Задание 1. Добавьте список в раздел info:

const info = document.getElementById("info");
const newList = document.createElement("ul");
info.append(newList);
console.log(newList);

const items = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];

for (const item of items) {
  const newListItem = document.createElement("li");
  newListItem.textContent = item;
  newList.append(newListItem);
}

// Задание 2. Добавьте ссылку в header:

const header = document.getElementById("header");
const link = document.createElement("a");
link.textContent = "Мой профиль в Linkedin/Instagram/другая любая соц.сеть";
link.setAttribute("href", "ссылка на ваш профиль");
link.setAttribute("target", "_blank");
header.append(link);
console.log(link);

// Задание 3. Создайте сложный элемент:
const main = document.getElementById("main");
const dynamic = document.createElement("section");
dynamic.setAttribute("class", "dynamic");
main.prepend(dynamic);
const h2 = document.createElement("h2");
const p = document.createElement("p");
h2.textContent = "Обучение JavaScript";
p.textContent =
  "Динамическое создание элементов позволяет улучшить интерфейс пользователя";
dynamic.append(h2);
dynamic.append(p);
console.log(dynamic);

// Задание 4. Удалите первый абзац в info, оставив только заголовок, используя метод removeChild.
// Ранее мы уже вызывали блок Инфо, поэтому здесь мы его не прописываем, а сразу вызываем дочерний элемент, который нужно удалить.
// const childInfo=info.querySelector("p");
// info.removeChild(childInfo);

// Задание 5. Полностью очистите содержимое элемента <footer>.
const footer = document.getElementById("footer");
footer.remove();
