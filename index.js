// 1. Написать функцию возведения числа в степень.

// const numberPower = (numb, power) => {
//   if (power === 1) {
//     return numb;
//   } else {
//     return numb * numberPower(numb, power - 1);
//   }
// };

// console.log(numberPower(3, 6));

// 2. Написать функцию поиска наибольшего общего делителя.

// const nod = (firstNum, secondNum, divider = secondNum) => {
//   if (firstNum % divider === 0 && secondNum % divider === 0) {
//     return divider;
//   } else {
//     return nod(firstNum, secondNum, divider - 1);
//   }
// };

// console.log(nod(14, 20));

// 3. Написать функцию для поиска максимальной цифры в числе.

// const recursive = (number) => {
//   const numString = number.toString();
//   if (numString.length === 1) {
//     return number;
//   } else {
//     const firstDigit = Number(numString[0]);

//     const maxDigit = recursive(numString.slice(1));

//     return firstDigit > maxDigit ? firstDigit : maxDigit;
//   }
// };

// console.log(recursive(123456789));

// 4. Написать функцию, которая определяет простое ли переданное число

// const primeNumFunc = (number, divisor = 2) => {
//   if (number <= 1) {
//     return false;
//   }
//   if (divisor >= number) {
//     return true;
//   }

//   if (number % divisor === 0) {
//     return false;
//   } else {
//     return primeNumFunc(number, divisor + 1);
//   }
// };

// console.log(primeNumFunc(7));

// 5. Напиши функцию checkAge(age, callback), которая принимает возраст и
// функцию обратного вызова.
// ● Если age >= 18, вызывай callback, передав туда строку "Доступ
// разрешён".
// ● Если age < 18, вызывай callback, передав "Доступ запрещён"

// const checkAge = (age, callback) => {
//   return callback(age);
// };

// const accessDenied = (age) => {
//   if (age >= 18) {
//     return "Доступ разрешен";
//   } else {
//     return "Доступ запрещен";
//   }
// };

// console.log(checkAge(29, accessDenied));
