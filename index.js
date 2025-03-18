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

3. Написать функцию для поиска максимальной цифры в числе.

const maxNum = (numbers) => {
  let stroke = numbers.toString().split("");
  const first = Number(str[0]); 
const secondNum = recursive(str.slice(1));
};

// console.log(maxNum(8937465934867539));

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
