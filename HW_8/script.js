// Задание 1.
const firstName = "Саида";
const lastName = "Нурланова";
const age = 23;
const messageEx1 = `Меня зовут ${firstName} ${lastName}, и мне ${age} года.`;
console.log(messageEx1);
// Использовав метод интерполяции мы вывели сообщение с исходными значениями.

// Задание 2.
const city = "Алматы";
const messageEx2 = "Я родом из города " + city;
console.log(messageEx2);
// В данном случае мы просто добавили к переменной  messageEx2 исходную переменную city и вывели сообщение.

// Задание 3.
let password = "kukuruza";
let hasAccessString = password.includes("kukuruza");
let hasAccessNoString = password.includes();
console.log(password);
console.log(hasAccessString);
console.log(hasAccessNoString);
// Использовали Includes для обоих случаев. В первом случае обозначили, что строчное значение kukuruza существует, а во второем случае мы выяснили, что пустой строки не может существовать.

// Задание 4.
let isMember = false;
isMember = isMember.toString();
console.log(isMember);
console.log(typeof isMember);
// Сперва мы задали значение false - логическое значение. Далее мы преобразовали нашу переменную с помощью toString() и вывели в консоль новое значение и тип данных этой переменной.

// Задание 5.
const cartItems = 0;
const boolCartItems = !!cartItems;
console.log(boolCartItems);
// Мы преобразовали переменную со значением числа в переменную с логическим значением и получили ответ false, так как по определению строки и 0 дают значение false.

// Задание 6. Создайте переменную averageScore и присвойте ей значение 89.75695. Затем переопределите значение этой переменной, округлив число до одного знака после запятой и выведите ее в консоль.
const averageScore = 89.75695;
const fixedAverageScore = averageScore.toFixed(1);
console.log(fixedAverageScore);
// Мы округлили наше значение до 89,8 с  помощью toFixed(1)

// Задание 7.
// - Удалите пробелы в начале и в конце строки.
// - Преобразуйте строку в верхний регистр.
// - Проверьте, содержит ли строка слова `"программирования"`.
// - Выведите результаты каждого шага в консоль.

const greetingMessage =
  "      Приветствуем вас в мире программирования!        ";
console.log(greetingMessage);
// Вывели в консоль начальное значение
const trimmedGreetingMessage = greetingMessage.trim();
console.log(trimmedGreetingMessage);
// Убрали пробелы
const upperCaseGreetingMessage = trimmedGreetingMessage.toUpperCase();
console.log(upperCaseGreetingMessage);
// Задали значению верхний регистр
hasProgrammingGreetingMessage =
  trimmedGreetingMessage.includes("программирования");
console.log(hasProgrammingGreetingMessage);
// Проверили строку на содержание подстроки "программирования" и получили ответ true
