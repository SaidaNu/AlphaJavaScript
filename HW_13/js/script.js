document.addEventListener("DOMContentLoaded", function () {
  // overview section
  //    Слайдер+setInterval
  const sliderWrapper = document.querySelector(".overview");
  const sliderContainer = document.querySelector(".overview__container");
  const sliderItems = document.querySelectorAll(".overview__item");
  const sliderButtons = document.querySelectorAll(".bi");
  const [sliderLeftButton, sliderRightButton] = sliderButtons;
  const offsetSize = sliderWrapper.offsetWidth;
  let sliderIndex = 0;
  let interval;

  function moveSlide(index) {
    sliderContainer.style.marginLeft = `-${index * offsetSize}px`;
  }

  function previousSlide() {
    if (sliderIndex !== 0) {
      sliderIndex--;
      moveSlide(sliderIndex);
      resetAutoScroll();
    }
  }

  function nextSlide() {
    if (sliderIndex !== sliderItems.length - 1) {
      sliderIndex++;
      moveSlide(sliderIndex);
      resetAutoScroll();
    }
  }

  function startAutoScroll() {
    interval = setInterval(function () {
      if (sliderIndex < sliderItems.length - 1) {
        sliderIndex++;
      } else {
        sliderIndex = 0;
      }
      moveSlide(sliderIndex);
    }, 5000);
  }

  startAutoScroll();

  function resetAutoScroll() {
    clearInterval(interval);
    startAutoScroll();
  }

  sliderLeftButton.addEventListener("click", previousSlide);
  sliderRightButton.addEventListener("click", nextSlide);

  // delivery section
  // Валидация форм
  const deliveryForm = document.querySelector(".delivery__form");
  const senderInput = document.querySelector("input[name='sender']");
  const recipientInput = document.querySelector("input[name='recipient']");
  const quantityInput = document.querySelector("input[name='quantity']");
  const volumeInput = document.querySelector("input[name='volume']");
  const emailInput = document.querySelector("input[name='email']");

  function validateInput(input) {
    const errorMessage = input.nextElementSibling;
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.textContent = "Заполните все поля корректно.";
      return false;
    } else {
      input.classList.remove("error");
      errorMessage.textContent = "";
      return true;
    }
  }

  deliveryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const senderIsValid = validateInput(senderInput);
    const recipientIsValid = validateInput(recipientInput);
    const quantityIsValid = validateInput(quantityInput);
    const volumeIsValid = validateInput(volumeInput);
    const emailIsValid = validateInput(emailInput);

    if (
      senderIsValid &&
      recipientIsValid &&
      quantityIsValid &&
      volumeIsValid &&
      emailIsValid
    ) {
      alert("Заявка на просчёт доставки успешно отправлена!");
      deliveryForm.reset();
    }
  });

  // Плавный переход по ссылкам
  const navLinks = document.querySelectorAll("a[href^='#']");
  for (const link of navLinks) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const id = link.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});
