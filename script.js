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

const userAnswer= prompt (' введите число')
const userNumber= Number(userAnswer)

for (let i=0; i< userNumber; i +=2 ){
console.log (i**2)
}