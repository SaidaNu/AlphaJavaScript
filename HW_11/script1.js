// Выводим наш документ с исходным заголовком. Далее провожу изменения заголовка и вывожу его в консоль.
console.log(document.title);
document.title = "Saida Nurlanova";
console.log(document.title);

// Вытаскиваем наш хедер с помощью метода по айди, далее с помощью универсального метода вытаскиваем заголовок по тегу и с помощью метода textContent задаем новый заголовок. Выводим в консоль и видим изменения на странице.
const header = document.getElementById("header");
const h1 = header.querySelector("h1");
h1.textContent = "Изучение JavaScript";
console.log(h1);

// С помощью универсального метода вытаскиваем все классы .menu-link и по отдельности в зависимости от индекса выводим текст в консоль (метод textContent).
const menuLink = document.querySelectorAll(".menu-link");
console.log(menuLink);
console.log(menuLink[0].textContent);
console.log(menuLink[1].textContent);
console.log(menuLink[2].textContent);

// Вытаскиваем наш юл, по нему вытаскиваем все теги ли, проводим изменения со вторым по счету тегом ли методом innerHTML и выводим в консоль.
const featuresList = document.querySelector(".features-list");
console.log(featuresList);
const li = featuresList.querySelectorAll("li");
console.log(li);
li[1].innerHTML = "Поддержка <b>API</b>";
console.log(li[1]);
