/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const a = prompt('Один из последних просмотренных фильмов?'),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотренных фильмов?'),
//       d = prompt('На сколько оцените его?');


// personalMovieDB.movies[a] = b;    
// personalMovieDB.movies[c] = d;  

// console.log(personalMovieDB);

// Изучение условий
// if (4 == 9){
//     console.log('Ok');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Дохера')
// } else {
//     console.log('Ok!');
// }


// тернарный оператор(участвуют 3 аргумента) 
// (num === 50) ? console.log('Ok!') : console.log('error');


// првоерка на толкьо на строгое соответствие (конструкиця switch)
// const number = '50';

// switch (number) {
//     case '49':
//         console.log("error");
//         break;
//     case '100':
//         console.log("error");
//         break;
//     case '51':
//         console.log("Ok");
//         break;
//     default:
//         console.log("sad");
//         break;    
// }

// конец изучения условий 



// изучение циклы 

// let numb = 50;
// пока условие выполянется то будет увеличиваться на 1ницу 
// while (numb < 55) {
//     console.log(numb);
//     numb++;
// }


// do {
//     console.log(numb);
//     ++numb; 
// }

// while (numb < 55);


// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         // оператор который прекращает цикл
//         // break;  
//         оператор который пропускает выбранное значение цикла и продолжает раблотать дальше 
//         continue; 
//     }
//     console.log(i);
        
// }

// конец изучения цикла 

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


 

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько оцените его?');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b; 
//         console.log('done');  
//     }   else {
//         console.log('error');
//         i--;
//     }   

           
// }


// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB >= 30){
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }

// console.log(personalMovieDB);

// конец изученеи циклов 


// старт изучения функций

// глобальаня перменная 
let num = 20; 

function showFirstMessage(text) {
     console.log(text); 
     //  локальная переменная с ней нельзя работать вне функции
    let num = 10;   
}

showFirstMessage("hellow world");
console.log(num);


function calc (a, b) {
    return (a + b);     //  return заканчивает функцию и есо ипосле нее что-то будет написано оно будет уже нечетабельно для функции
}

console.log(calc(4, 3));
console.log(calc(7, 3));
console.log(calc(12, 3));



function ret() {
    let num = 50;
    return num;   /*возвращает значение своей локальнйо перменной */
}

const anotheNum = ret();
console.log(anotheNum);



const logger = function() {
      console.log('hellow');
};

logger();


const cal = (a, b) => {
    
    return a + b;

};


// Методы и свойсвта строк и чисел 

const str = 'test';

console.log(str.length);  /* это свойство */

console.log(str.toUpperCase()); /* это метод */

const fruit = 'some fruit';


console.log(fruit.indexOf('fruit'));  /* поиск есть ли такой кусок внутри искомой строки (поиск подстроки) */ 


const logg = 'hellow world';

// метод который вырезает от ночала до коныа строки 
console.log(logg.slice(6, 10));  

// метод который вырезает от ночала до коныа строки тот же самый метод(но не может рабоатть с отрицательынми значениями)
console.log(logg.substring(6, 10)); 

// метод говорит сколько символов вырезать
console.log(logg.substr(6, 10)); 



// числа 

// библиотке свйоств и методов с числами Math 


// метод округления 
const number = 12.2;
console.log(Math.round(number));

// метод котоыре переводит в другую систему изчисления из строки в число 
const test = '12.2px';
console.log(parseInt(test));

// метод котоыре переводит в десятичнй вариант с плавующей точкой
console.log(parseFloat(test));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



let numberOfFilms ;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    // услови пока пользователь вводит пустую строку или нажимает отмену или вводит не число, тогда вопрос будет повторяться 
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 



function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?' , ''),
              b = prompt('На сколько оцените его?' , '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');  
        }   else {
            console.log('error');
            i--;
        }   
            
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB >= 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }

}


showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


// конец изучения функций 

