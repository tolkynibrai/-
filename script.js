// const name= 'Tolkyn'
// let age= 23;
// let status= true
// console.log(name, age, status)

// const name= 'Cat'
// const age= 20;
// const status= true;
// const define= undefined;
// const nothing= null;
// console.log( typeof name, typeof age,typeof status, typeof define, typeof nothing);

// console.log(10+5)
// console.log(10-5)
// console.log(10/2)
// console.log(10*2)

// console.log(10 % 4) //остаток после целого числа 
// console.log(10**2) //степень
// console.log(100/0)
// console.log('10'+'10')// 10+10= 1010
// console.log(10/'10')//10*/10=1
// console.log(10*'5')//10+5=50


// console.log(+'10') //=> 10 в текст
//  let num1= 7
// num1--
// console.log(num1)

//  let num2= 7
// num1+=2
// console.log(num2)


// const productName= 'banana';
// let price= 1000;

// console.log( productName+' '+ price +'тенге')

// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// console.log(5 == 5)
// console.log(5 > 10)
// console.log(5 < 10)
// console.log(5 <= 10)
// console.log(5 === 5)

// console.log('10' == '10' )// правда
// console.log('10' == 10 ) //правда
// console.log('10' === 10 )/// ложь типы данных
// console.log(20 !==30 )// 20 не равно 30 это правда

// //!обратный- противоположный  
// console.log(!true) //ложь


//If felse

// const answer = prompt (" сколько лет?")
// const age = Number (answer)
// console.log(age)

// if (isNaN(age)){
// alert('Введите возраст')
// }


// else if(age >=18) {
//  alert('вот ваши водительские права!')
// }

// else{
// alert('вам нет 18!')
// }


// const country = prompt ("Назовите родную страну ")

// if (country === "Казахстан"){
// alert('Проходите')
// }
//  else{
//  alert('Вход восприщен')
//  
//  const userAnswer = prompt ('Введите возраст')
//  const userAge = Number (userAnswer)
//  console.log(Number(userAnswer))

//  if (userAge >= 13 && userAge < 20 ){
//   console.log('вы подросток')
//  }
//  else if(userAge <13) {
//  console.log('Вы ребенок идите играть!')
//  }

// else 
//   {
// console.log('Вы не подросток, идите работать!')
// }


// const number = prompt('Введите число')
// const a = Number(number)
// const power = prompt ('Введите степень')
// const numberPower = Number(power)
// c=a**numberPower
// console.log(c)


// let text= "my text"
// if( text === "some text") {
//   text= "another text"
// }
// else {
// text="some text"
// }
// console.log (text)

// let number= 20
// if( number === 0) {
//   text= "1"
// }
// else if (number<0)
//   {
// number="less than 0"
// }
// else if (number>0)
//   {
// number+=10
// }
// console.log (number)


///Задача  к тернанрному оператору 


// const hasvisa= false
// if (hasvisa === true){
//   console.log ('Добро пожаловать')
// }
// else {
//   console.log ('у вас нет визы')
// }



///Тернаный оператор 

// hasvisa ? console.log ('Добро пожаловать') : console.log('у вас нет визы') ///?-if; :-else

// console.log (hasvisa ? 'Добро пожаловать' : 'у вас нет визы' )/// сократило вынесли за скобку  консоль


// let country= 'sweden';
// let access;
// if(country == 'sweden'){
//   access=true;
// }
// else{
//   access= false
// }

// ///1
// country == 'sweden'? access= true : access= false

// ///2 
// access = country == 'sweden' ? true: false

// //3
// access = country == 'sweden' ///access = false 


//Loops -цыклы 

// console.log ('привет')



// for loop -способ 1



// for (let num=1; num<= 10; num +=2 ){
//   console.log ('привет')
// }

// for (let i =1; i <= 10; i +=2 ){  // лучше называть i а не num
//   console.log ('привет')
// }

// for (let i=8 ; i>0 ; i-- ){
//  console.log ('привет')
// }

// let counter =0

// for ( let i=0; i<10; i++){
//   let counter =0
//   counter ++
//   console.log(counter)
// }

// for ( let i =0; i< 8; i+=2){
//   const userAnswer= prompt (' введите число')
//   const userNumber= Number(userAnswer)

//   if( userNumber===10){
//     console.log(' равно 10')
//   }
//   else{
//     console.log(' введи 10')
//   }
// }

// const userAnswer= prompt (' введите число')
// const userNumber= Number(userAnswer)

// for (let i=0; i< userNumber; i +=2 ){
// console.log (i**2)
// }



// for( let i=1; i<=100; i++)

//    if( i%3===0 && i%5===0){
//     console.log ('fizzBuzz')
//   }
//    else if (i%3 ===0){
//     console.log ('fizz')
  
//   } 
//   else if (i%5 ===0){
//     console.log('buzz')
//   }

//   else{
//     console.log(i)
//   }

///WHILE LOOP

// let i=0
// while (i<10){
//   console.log('hello')
//   i++
// }

//Функции

// function sayHappyNewYear(personName){
//   console.log(`С новым годом, ${personName}`)
// }
// sayHappyNewYear('Tolkyn')
// sayHappyNewYear('Kirill')

// for( let i=1; i<=10; i++){
//   sayHappyNewYear()
// }

// function sumTwoNumbers(num1, num2){
//   console.log(num1+ num2)
// }
// sumTwoNumbers(2, 5)


///Циклы 3ч
// function sumTwoNumber(num1, num2){
//   if (num1 === undefined || num2=== undefined){
//     console.log('некоторые параметры отсутствуют');
//   }
//  else if (typeof num1 !== 'number' || typeof num2 !== 'number'){
// console.log('невалидный аргумент');
//  }
//  else{
//   console.log(nim1+num2);
//  }
// }

// sumTwoNumber (5, 7);
// sumTwoNumber (2, 7);
// sumTwoNumbe ('fds', true);
// sumTwoNumbe ();
// sumTwoNumbe (2);
// sumTwoNumbe (0, 0);

// function multiplyTwoNumber( num1, num2){
//   console.log(num1*num2)
// }


// multiplyTwoNumber(5, 2)

// function printSquares( min, max){
//   if(min>max) {
//     console.log('min не может быть больше max')
//   }
//   else if(min===max){
//     console.log('min не может быть равен max')
//   }
// else{
//     for (let i = min; i < max; i++) {
//   console.log (i**2)
// }
// }
// }

// // printSquares(0, 10)
// // printSquares(10, 0)
// // printSquares(10,0)
// // printSquares(10, 10)



//ФУНКЦИЯ КАК ПЕРЕМЕННАЯ= анонимная или стрелочная функия
// const sayHello =function (){
//   console.log('Hello')
// }

// sayHello()

// const sayHello = () =>{
//  console.log('Hello') 
// }

// sayHello() ///хз что это, потом узнам 



//retutn=возвращать
// function divideTwoNumber( num1, num2){
//   return num1/ num2 
//   // console.log(num1/num2)
// }

// function increaseNumber(num1){
//   console.log(num1+1)
// }



// let result = divideTwoNumber(20, 2)
// console.log(result)
// result++

// increaseNumber(result)

// function getRandomInteger(min, max) {
    
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateRandomRgb() {
//     const r = getRandomInteger(0, 255);
//     const g = getRandomInteger(0, 255);
//     const b = getRandomInteger(0, 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// setInterval(function() {
//     const randomColor = generateRandomRgb();
//     console.log(randomColor); 
//     document.body.style.backgroundColor = randomColor;
// }, 1000);

// Обьекты в js
// const text= 'hello'

// if(true){
//   const text='if'
//  }

// for(let  i=0; i<10; 1++){
//   const text='for'
//  }

// function hello(){
//   const text= 'fuction'
//  }
// while(true){
//   const text='while'
//  }

//Closures
// function outerFunc(){
//   let counter = 0
 
//   return function(){
//   counter++
//   console.log(counter)
//   }
// }

// const innerFunc = outerFunc()
// innerFunc()
// innerFunc()
// innerFunc()

// function showDesimalOrInteger(n){

//    for( let i=1; i<n ; i+=0.5){ 
//     if(Number.isInteger(i)){
//       console.log(i+'integer')
//     }
//     else {
//       console.log(i + 'desimal')
//     } 
//   }
// }
// showDesimalOrInteger(10)

//objacts обьекты

// const phoneName= ' Iphome 14'
// const color= ' black'
// const memory= 256
// const inStock= true

// const phoneName2= ' Samsung'
// const color2= 'grey'
// const memory2= 126
// const inStock2=false


// field. value, key - поле значение
// const phone1 = {
// name:'Iphome 14',
// color: ' black',
// memory: 258,
// inStock: true
// }

// const phone2 = {
// name:'Samsung',
// color: 'grey',
// memory2: 126,
// inStock2: false
// }

// console.log(phone1)
// console.log(phone2)


// console.log(phone1.name)
// console.log(phone1['color'])

//как менять 

// const phone1 = {
// name:'Iphome 14',
// color: ' black',
// memory: 258,
// inStock: true
// }

// phone1.color= 'red'
 
// //добавить новое поле
// phone1.screenSize= 6.7

// //как удалять поле
// phone1.memory= undefined

// ///удалять поле со значение
// delete phone1.name
// delete phone1.color

// console.log(phone1)


//Ссылочный тип даных
// const student1={
// name: 'Vladimir',
// lessonType:'online'
// }

// const student2={
//   name:'Tolkyn',
//   lessonType:'offline',
// }

// student1.lessonType='offline'
// student2.lessonType='online'

// console.log(student1)
// console.log(student2)


// const studentOriginal={
//   name:'Kairat',
//   lessonType:'offline'
// }

// const studentCopy= studentOriginal

// studentOriginal.lessonType='online'

// console.log(studentOriginal)
// console.log(studentCopy) 


// const studentOriginal={
//   name:'Kairat',
//   lessonType:'offline',
//   address:{
//     country:'kazakhstan',
//     city:'Astana',
//   }
// }
// // //spread оператор 

// // const studentCopy= {...studentOriginal}

// // // studentOriginal.lessonType='online'
// // // studentCopy.name='Aisultan'

// // JSON копирование обьека без последствий 


 
// //'{"name":"Kairet", "lessonType": "offline"}'  //обязательно овычки двойные и строка

// const studentOriginalJSON= JSON.stringify(studentOriginal) 

// const studentCopy= JSON.parse(studentOriginalJSON)



// studentOriginal.address.city='Almaty'

// console.log(studentOriginal)
// console.log(studentCopy) 

 

//Циклы для обьекта

// const car={
//   moder:'kia',
//   color:'black',
//   price:7_000_00,
//   isNew: false,
// }

// // for(const key in car){
// //   console.log(key)///все поля
// // }

// for(const key in car){
//   console.log(car[key])///все переменные 
// }


// ///как проверить есть ли обьект в поле
// console.log('color' in car) //правда или ложь


//заморозка

// const student={
//   name:'Timur',
//   phone:'iphone',
// }

// Object.freeze(student)
// student.phone='xiaomi mi 15'

// console.log(student)


// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }

// for (const key in engineers) {
//     console.log(`Зп ${key} составляет ${engineers[key]} usd.`) 
// }

//Массивы в js

// const numbers=[1, 2, 3, 4, 5]
// const names= ['Kairat','Altair','Assel','Tolkyn']

// console.log(numbers)
// console.log(names) //index=>0, 1, 2, 3 индекс

// console.log(names[0])

// names[3]='Dinis'
// names[2]='Kirill'
// console.log(names)

//добавить в конец массива

// names.push('Aisultan')
// console.log(names)


// names.unshift('liliya')
// console.log(names)

//Удалить элемент из массива последний эллемент

// names.pop()
// console.log(names)

//Удалить элемент из массива первый элемент

// names.shift()
// console.log(names)

//мутабельный push pop unshift shift= меняет ориг массив

//не мутабельный 

// names.forEach()


// for(let i=0; i<names.length; i++){
//   console.log(names[i])
// } //чтобы не писать число каждый раз и функия будет подстраиватся на число в массиве 
 
// for(const index in names){
//   console.log(index, names[index])
// }

// for (const value of names){
//   console.log(value)
// }

// names.forEach ((value) =>{
// console.log(value)
// })

// const fruits =[ 'apple','banana', 'pineapple', 'orange','grape','lemon','lome']


// for (let i=1; i< fruits.length; i+=2){
//   console.log(fruits[i])
// }

// const numbers =[ 42, 65, 49, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// for(let i=0; i<numbers.length; i++){
//   console.log(`индeксу ${i} соответсвует число ${numbers[i]}`)
// }

// Задание 6

// Есть массив произвольных чисел:
// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Вывести в консоль все элементы массива, используя 2 разных цикла:
// for-of и for со счетчиком

// 2) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть
// переменную (например, sum) и записать в нее начальное значение
// (в случае с суммой - ноль). Затем уже описать цикл,
// в котором эта сумма будет считаться (в каждой итерации цикла к ней будет
//     прибавляться следующий элемент массива).

// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.

// 4) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить
// переменную (например, max), записать в нее первый элемент массива,
// а затем уже в цикле искать максимальное значение.

// 5) Определить и вывести в консоль индекс максимального числа массива
// (или индексы, если число встречается более одного раза).
// Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.



//  

// for(const number of numbers){
//   console.log(number)
// }

// for(let i=0; i<numbers.length; i++){
//   console.log(numbers[i])
// }

// let sum= 0
// for(const number of numbers){
//   sum=sum + number
// console.log(sum)
// }

// let sum= 0
//  for(const number of numbers){
//   if(number% 2 ===0)
//   sum+= number
// }
//   console.log(sum)

// let max=0

// for(const number of numbers){
//   if (max < number) {
//     console.log('старое максимальное число,', max)
//     max= number 
//     console.log('новое максимальное число,', max)
//   }
//   else{
//     console.log(`число ${number} меньше чем максимальное число ${max} ничего не делаем`)
//   }
// }


// const student=[
// {
//   name: 'Aisultan',
//   lessonType: 'online',
// },
// {
//   name: 'altair',
//   lessonType: ' offline'
// }
// ]
// // console.log(student[1].lessonType)


// const studentJSON= JSON.stringify(student)
// studentCopy= JSON.parse(studentJSON)

// console.log(studentJSON)

// studentCopy[0].name='sagynysh'

// console.log(student)
// console.log(studentCopy)



// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];


// // for (let i=0; i< questions.length; i++){
// // const questions= questions[i]
// // questions.userAnswer= null
// // }


// for (const question of questions){
//   questions.userAnswer= null
// }
// console.log(questions)





// Задание 7

// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, 
// но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище 
// (например, let newArr = []). Затем пройтись в цикле по массиву arr, 
// и в каждой итерации, если элемент положительный, добавлять его в массив newArr

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const newArr =[]


// for(const number of arr){
// if (number > 0){
//    newArr.push(number)
// }
// }
// console.log(newArr)

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// function filterArrayByLimit(array, limit){
//  const filterArray=[]

//  for(const element of array){
//   if( elemern>= limit ){
//     filterArray.push(element)
//   }
//  }
//   return filterArray
// }

// console.log(filterArrayByLimit(arr, 3))
// console.log(filterArrayByLimit(arr, 5))

// const numbers= [12, 5,64,76,32]
// numbers.forEach(function (number, index){
//   console.log(number, index)
// })


// const numbers= [12, 5,64,76,32]

// for(const number of numbers){
//   if (number === 64 )

// }
// console.log(number)

// const numbersCopy = numbers.map(function (number){
// return number * 2
// })

// console.log(numbers)
// console.log(numbersCopy)

// const arr = [12, 5, 64, 76, 32];

// function copyArr( arr ){
//   return arr.map(function(num){
//     return num;
//   }) 
// }
// console.log(copyArr(arr))

// const arr =[ 5, 4, 3, -3, -10, -1, 8, -20, 0 ]

// function copyArr(array){
//   return array.map( element=> element)
// }

// console.log(copyArr(arr))
// console.log(copyArr([6, 4, 3]))

const names = ['Mike', 'Stive', 'Robin'];

function greetig (array){
  return array.map((name) => {
    return `Hello, $ {name}`;
  });
}

console.log(greetig(names)); 