document.addEventListener("DOMContentLoaded", function () {
  const cont = document.querySelector(".result");
  const buttons = document.querySelectorAll(".button");
  const [
    circleButton,
    squareButton,
    redButton,
    yellowButton,
    greenButton,
    blueButton,
    inputButton,
  ] = buttons;
  console.log(buttons);

  const colors = [
    {
      title: "Красный",
      hex: "#E32636",
    },
    {
      title: "Желтый",
      hex: "#FDE910",
    },
    {
      title: "Зеленый",
      hex: "#138808",
    },
    {
      title: "Синий",
      hex: "#1560BD",
    },
  ];

  // Настройте выбор фигуры
  // Предварительно пишем функцию для очистки нашего контейнера, чтобы в случае чего фигуры не накладывались друг на друга

  function clearCont() {
    cont.innerHTML = "";
  }

  // Создаем обработчик события для каждой кнопки

  circleButton.addEventListener("click", function addCircle() {
    clearCont();
    const figure = document.createElement("div");
    figure.classList.add("circle", "figure");
    cont.append(figure);
    console.log(figure);
  });

  squareButton.addEventListener("click", function addSquare() {
    clearCont();
    const figure = document.createElement("div");
    figure.classList.add("square", "figure");
    cont.append(figure);
    console.log(figure);
  });

  // Реализуйте изменение цвета

  function changeColor(i) {
    const figure = document.querySelector(".figure");
    if (figure) {
      console.log(figure);
      figure.style.background = colors[i].hex;
      console.log(`Фигура окрашена в ${colors[i].hex} цвет.`);
    } else {
      console.log("Фигура не выбрана.");
    }
  }

  redButton.addEventListener("click", () => changeColor(0));
  yellowButton.addEventListener("click", () => changeColor(1));
  greenButton.addEventListener("click", () => changeColor(2));
  blueButton.addEventListener("click", () => changeColor(3));

  // Добавьте текст
  const form = document.querySelector(".form");
  const input = document.querySelector('input[name="text"]');
  console.log(input);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const textInput = input.value;
    const figure = document.querySelector(".figure");
    if (!textInput || !figure) {
      console.log("Введите данные!");
    } else {
      figure.textContent = textInput;
      console.log(textInput);
    }
  });

  // Добавьте кнопку "Очистить"
  // Создаем необходимые элементы.
  const manage = document.querySelector(".manage");
  const removeCont = document.createElement("div");
  removeCont.setAttribute("class", "remove__cont");
  manage.append(removeCont);
  const removeButton = document.createElement("button");
  const labelRemoveButton = document.createElement("h2");
  labelRemoveButton.classList.add("label", "remove__label__button");
  labelRemoveButton.textContent = "Очистить содержимое";
  removeButton.classList.add("button", "remove__buttoon");
  removeButton.textContent = "Очистить";
  removeCont.append(removeButton);
  removeButton.before(labelRemoveButton);
  console.log(removeButton);
  console.log(labelRemoveButton);
  console.log(removeCont);

  // Вызываем функцию для очистки контейнера
  removeButton.addEventListener("click", () => {
    const figure = document.querySelector(".figure");
    if (figure) {
      clearCont();
      console.log("Содержимое очищено.");
    } else {
      console.log("Фигура не выбрана.");
    }
  });
});
