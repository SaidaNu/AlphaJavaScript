// Задание 1. Переписать этот код, используя цикл while.
// const numbers = [52, 31, 9, 85, 31, 45];
// let i = 0;
// let sum = 0;

// while (i < numbers.length) {
//   sum += numbers[i];
//   console.log(`Сумма чисел: ${sum}`);
//   i++;
// }

// Задание 2. Скопируйте приведенный ниже массив books в свой код и напишите код (желательно, используя цикл for), который выводит информацию о книгах, включая их награды, каждая награда на отдельной строке:

// const books = [
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     numberOfPages: 281,
//     genre: "Fiction",
//     awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     numberOfPages: 328,
//     genre: "Dystopian",
//     awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     numberOfPages: 180,
//     genre: "Classic",
//     awards: ["Modern Library's Top 100", "National Book Award Nominee"],
//   },
//   {
//     title: "Moby Dick",
//     author: "Herman Melville",
//     numberOfPages: 635,
//     genre: "Adventure",
//     awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     numberOfPages: 432,
//     genre: "Romance",
//     awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   console.log(
//     `Название: ${books[i].title}, Автор: ${books[i].author}, Количество страниц: ${books[i].numberOfPages}, Жанр: ${books[i].genre}, Награды: `
//   );
//   // Друг за другом прописываем вывод наших значений с помощью интерполяции
//   for (let j = 0; j < books[i].awards.length; j++) {
//     console.log(` - ${books[i].awards[j]}`);
//     // в данном случае уже выводим внутренние данные массива (награды) по переменной j - внутри второго цикла
//   }
// }

// Задание 3. Напишите функцию calculateAveragePages, которая принимает массив books из прошлой задачи и возвращает среднее количество страниц.

// let sum=0;

// function calculateAveragePages(books) {
//     for (let i = 0; i < books.length; i++) {
//       sum += books[i].numberOfPages;
//     }
//     return sum/books.length;
// }

// console.log(calculateAveragePages(books));

// Задание 4. Напишите функцию repeatString, которая принимает строку str и число n и возвращает строку str, повторённую n раз

// function repeatString(str, n) {
//   return str.repeat(n);
// }

// console.log(repeatString("hello", 3));

// Задание 5. Напишите функцию calculateAverage, которая принимает массив чисел и возвращает их среднее значение.

// const array = [];
// let sum = 0;
// function calculateAverage(array) {
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }
// console.log(calculateAverage([10, 20, 30, 40, 50, 60]));

// Задание 6. Напишите функцию countEvenNumbers, которая принимает массив чисел и возвращает массив чётных чисел.

// const array = [];
// const newArray = [];

// function countEvenNumbers(array) {
//   for (const num of array) {
//     if (num % 2 === 0) {
//       newArray.push(num);
//     }
//   }
//   return newArray;
// }
// console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
