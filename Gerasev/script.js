// alert( 'привет мир!!!');




// let message;
// message = 'hello world!!';  ///////////////    Let переменая для обозначения  слов и цыфр
// alert(message);
 



// let user = 'шнее пепе';
// age = '17';
// alert(user);
// alert(age);



 // console.log(1+4+3+6)

//  let user = {   
// name: "Daniil",
// age: "17"
//  };
//  alert( user.name );
//  alert( user.age );


// delete user.age;

// const user = {
//   name: "Daniil"
// };

// user.name = "Pete"; 

// alert(user.name);


/*
        let x=10;
        let y=5;
        // let z="first";
        // let x="second";
        console.log(x+y);
        console.log(x-y);
        console.log(x*y);
        console.log(x/y);
        console.log(x**y);
        console.log(x%y);
15
-5 
50 
0.5 
9765625 
5
*/

// let age = Number(prompt("Введите свой возраст:"));
// alert("Ваш возраст через 10 лет: " + (age+10));


// let age = prompt("Enter ur age")
// age=Number(age);
// let newAge=age+10;
// alert("ur age in 10 years" + (newAge))


// let x=Number(prompt())
// let x=+prompt()
// if(x>5){
//     console.log ("x bolshe 5")}
// else if (x===5) {
//     console.log ("x raven 5")
// }
// else {
//     console.log("x menshe 5")
// }
// let x=+prompt()
// let message =(x>5)?"x больше 5": "x меньше или равен 5"
// console.log(message)



// let x=true
// let y=false

// console.log((x&&!y)||(!x&&y))

// 1 ЗАДАЧА
// let x = prompt("напишите число с 10 до 100");
// x = Number(x);
// if ( x >= 10 || x <= 100) { 
//     console.log( "всё верно, число входит в диапозон");
// }
// else {      
//     console.log("число не входит в диапозон");
// }

// 2 ЗАДАЧА
// let x = prompt("напишите число для проверки чётности или нечётности")
// x = Number(x);
// if ( x % 2 === 0) { 
//     console.log("число чётное")
// }
// else {  
//     console.log ("число нечётное!")
// }

// 3 ЗАДАЧА
// let x = prompt("Напишите возраст")
// let message = (x<18)?"Доступ Запрещен":"Доступ разрешён";
// console.log(message);

// 4 ЗАДАЧА (Сложение двух чисел)
// let x = Number (prompt("Введите первое число:"))
// let y = Number (prompt("Введите второе число:"))
// let z = (x + y)
//         console.log (z)

// 5 ЗАДАЧА (Проверка возраста)
// let x = prompt("Введите возраст")
// if (x < 18){
//         console.log ("Доступ запрещен")
// }
// else{
//         console.log ("Доступ разрешен")
// }
// 6 Задача (Определение треугольника)
// let x = parseFloat(prompt("1st side:"))
// let y = parseFloat(prompt("2nd side:"))
// let z = parseFloat(prompt("3rd side:"))

// if(x === y && y === z && z === x)
// {
// console.log("Равносторонний треугольник")
// }
// else if(x === y || y === z || x === z)
// {
// console.log("Равнобедренный треугольник")
// }
// else 
// {
// console.log ("Является разносторонним треугольником")
// }

// 7 Задача (Квадрат или прямоугольник)
// let x = prompt("первое число")
// let y = prompt("второе число")
// let z = prompt("третье число")
// let i = prompt("четвёртое число")
// if (x === y && y === z && z === i && i === x){
//         console.log ("Квадрат")
// }
// else{
//         console.log ("Прямоугольник")
// }

// 8 Задача (Проверка на чётность не чётность)
// let x = Number (prompt("Число"))
// if (x % 2 === 0){
//         console.log ("Чётное")
// }
// else{
//         console.log ("Нечётное")
// }

// 9 Задача (Цикл for перебор от 10 до 1)
// for (let i = 10; i >= 1; i--){
//         console.log(i)
// }

// 10 Задача (Цикл while от 10 до 1)
// let i = 10;
// while (i >= 1){
//         console.log (i); i--
// }

// 11 Задача (Цикл for с шагом в 3 числа)
// for (let i = 3; i <= 18; i+=3){
//         console.log(i)
// }

// 12 Задача (Цикл for перебор от 20 до 10)
// for (let i = 20; i >=10; i--){
//         console.log(i)
// }

// 13 Задача (Цикл for перебор от 15 до 20)
// for (let i = 15; i <= 20; i++){
//         console.log(i)
// }

// 14 Задача (Цикл for с шагом в 2 числа ЧЁТНЫЕ)
// for (let i = 2; i <=10; i+=2){
//         console.log(i)
// }
// 15 Задача (Цикл for с шагом в 2 числа НЕЧЁТНЫЕ)
// for (let i =1; i <=10; i+=2){
//         console.log(i)
// }

// 1 Задача
// let x = prompt ("Введите логин")
// let z = prompt ("Введите пароль")
// if (x === "admin" && z === "password"){
//         console.log("Доступ разрешен")
// }
// else{
//         console.log("Отказано в доступе")
// }

// 2 Задача
// let x = +prompt("Введите число")
// let y = 1
// for (i = 1; i <= x; i++){
// y = x + i
// alert ("сумма" + y)

// 3 Задача
// let x = Number (prompt("Введите число"))
// let y = 0;
// let z = 1;
// if ( x % 2 === 0){
//         for(i=1; i<=x; i++){
//         z = z * i;
//         }
// alert ("ответ" + z);
// }
// else{
//         for(i=1; i<=x; i++){
//         y = y + i;
// }
// alert ("ответ" + y);
// }

// 3 Задача (измененная)
// let x = +prompt("введите число")

// if (x % 2 === 0) { //если x = чётное

//         let sum = 0
//         for (let i = 1; i  <= x; i++) // счётик i
//         {
//                 sum = sum + i;
//                 console.log(sum);
//         }
// }
// else {

//         let multiplication = 1;
//         for (let i = 1; i < x; i++)
//         {
//                 multiplication = multiplication * i;
//                 console.log(multiplication);
//         }
// }

// let sum = 0

// while (true) {
//         let value = +prompt("Введите число")

//         if (!value) break;
//                 sum = sum + value
// }
// alert (sum);

// for (let i = 0; i < 10; i++){
//         if (i % 2 !== 0) continue;
//         alert (i)
// }

// let a = +prompt("Введите число")

// switch (a) {
//  case 3:
//                 alert("Мало")
//                 break;
//  case 4: 
//                 alert ("В точку")
//                 break;
//  case 5:
//                 alert ("Много")
//                 break;
//                 default:
//                 alert("Мимо")
//                 break;
                
// }

// let a = +prompt("введите число")
// switch(a) { 
//     case 0:
//         alert('0')
//         break
//         case 1:
//             alert('1')
//             break
//             case 2:
//          case 3:
//     alert('2 3') 
//     break
//     default:
//     alert("не в диапозоне")
// }

// function func() { //function declaration
//         alert( "Всем привет!"); //
// }

// func() // вызов

// function func(параметры) {
//  alert("Всем привет!"); // тело функции
// }

// function func () {
//         var a = 5
//         alert (a)
// }

// func

// function func(a, b) {
//         // console.log (a + b) // локальный код функции (тело) // callback
//         return (a + b) // 
// }

// let sum = func(3, 5)
// console.log (sum (5 , 3))

// вызов с аргументами

//arrow function

// let func = (name) => {
//         let message = "Привет, " + name
//         console.log(message)
// }

// (func("Дмитрий"))

// ---------------------------
// Программа будет считать сумму значений по кол-ву аргументов.
// function sumAll() {
// let sum = 0
// for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
// }
// return sum
// }

// console.log(sumAll(1, 2, 3, 4)) // 1+2+3+4 = 10

// Напишите функцию, которая принимает число, в консоль выводится результат квадрата этого числа.

// function num1() {
//         let x = +prompt ("Введите число")
//         x = x**2;
//         alert(x);


// }
// num1()

// -------------------

// let num = (num1) => {
// num1 = num1 **2;
// console.log(num1)
// }

// num (prompt())

// Напишите функцию, которая принимает два числа (с клавиатуры) и возвращает большее из них
// let numCheck = (num1, num2) => {
//         if(num1 > num2)
//                 console.log(num1)
//         else if(num1 < num2)
//                 console.log(num2)
//         else{console.log("they are equal")}
// }
 
// numCheck(prompt(), prompt())


