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


// првоерка  толкьо на строгое соответствие (конструкиця switch)
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


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // оператор который прекращает цикл
        // break;  
        // оператор который пропускает выбранное значение цикла и продолжает раблотать дальше 
        continue;
    }
    console.log(i);

}

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
// let num = 20; 

// function showFirstMessage(text) {
//      console.log(text); 
//      //  локальная переменная с ней нельзя работать вне функции
//     let num = 10;   
// }

// showFirstMessage("hellow world");
// console.log(num);


// function calc (a, b) {
//     return (a + b);     //  return заканчивает функцию и есо ипосле нее что-то будет написано оно будет уже нечетабельно для функции
// }

// console.log(calc(4, 3));
// console.log(calc(7, 3));
// console.log(calc(12, 3));



// function ret() {
//     let num = 50;
//     return num;   /*возвращает значение своей локальнйо перменной */
// }

// const anotheNum = ret();
// console.log(anotheNum);



// const logger = function() {
//       console.log('hellow');
// };

// logger();


// const cal = (a, b) => {

//     return a + b;

// };


// Методы и свойсвта строк и чисел 

// const str = 'test';

// console.log(str.length);  /* это свойство */

// console.log(str.toUpperCase()); /* это метод */

// const fruit = 'some fruit';


// console.log(fruit.indexOf('fruit'));  /* поиск есть ли такой кусок внутри искомой строки (поиск подстроки) */ 


// const logg = 'hellow world';

// метод который вырезает от ночала до коныа строки 
// console.log(logg.slice(6, 10));  

// метод который вырезает от ночала до коныа строки тот же самый метод(но не может рабоатть с отрицательынми значениями)
// console.log(logg.substring(6, 10)); 

// метод говорит сколько символов вырезать
// console.log(logg.substr(6, 10)); 



// числа 

// библиотке свйоств и методов с числами Math 


// метод округления 
// const number = 12.2;
// console.log(Math.round(number));

// метод котоыре переводит в другую систему изчисления из строки в число 
// const test = '12.2px';
// console.log(parseInt(test));

// метод котоыре переводит в десятичнй вариант с плавующей точкой
// console.log(parseFloat(test));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// let numberOfFilms ;


// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// услови пока пользователь вводит пустую строку или нажимает отмену или вводит не число, тогда вопрос будет повторяться 
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };






// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?' , ''),
//               b = prompt('На сколько оцените его?' , '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b; 
//             console.log('done');  
//         }   else {
//             console.log('error');
//             i--;
//         }   

//     }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB >= 30){
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }

// detectPersonalLevel();


// function showMyDB (hidden) {
//     if (!hidden){
//         console.log(personalMovieDB);
//     }

// }


// showMyDB(personalMovieDB.privat);


// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();


// конец изучения функций 



// изучение callback функции 

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }


// learnJS('javaScript', function () {
//     console.log('i love js');
// });



// изучение объектов и диструктиризция объектов 

// создание объектов черзе скобки
// const options = {
// где name это ключ(свойство) и его знаение test 
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// options.makeTest();
//  деструктуризация это вытасивание свйоств в качестве отдельнйо перменной 
// const {border, bg} = options.colors;

// так можно получить количество значение в объекте 
// console.log(Object.keys(options).length);  

// console.log(options.name);


// delete options.name;

// console.log(options);

// цикл перебора свойств в объекте сложный вариант полученяи количества значенйи в объекте
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }

// }

// console.log(counter);


// изучение массивы 

// const arr = [14,10,33,31,25];

// метод позволяет сортировать строки поалфавиту а цифры будут как 10 14 25 31 33
// arr.sort(compareNum);

// console.log(arr);

// function compareNum(a, b) {
//     return a-b;
// }
// arr.pop();

// console.log(arr);

// цикл для перебора массива
// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// метод  для перебора массива такое же результат как и у цикла рабоатет токьо с массивами
// for (let value of arr) {
//     console.log(value);
// }


// еще 1н метод для перебора массива с использованием коллбэк функции что позволяет более гибко нстраивать
// метод форич проходит по каждому элементу массива и применяет к нему функцию 
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// пользователь вводит какие-то слова
// const stra = prompt("", "");

// объединяем в массив через запяую
// const products = stra.split(", ");

// products.sort();
// из массива объединем в строчку слвоа 
// console.log(products.join(': '));







// Проверить, является ли заданное натуральное число простым.
// начни с этой



// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// услови пока пользователь вводит пустую строку или нажимает отмену или вводит не число, тогда вопрос будет повторяться 
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// let num = +prompt('Введите простое натуральное число');

// if (num == '' || num == null || isNaN(num)) {
//     num = +prompt('Введите простое натуральное число');
// } else if (num > 0 && num / num == 1 && isNaN(num) ) {
//     console.log('Вввели правильно');
// } else {
//     num = +prompt('Введите простое натуральное число');
// }







// function checkNum() {
//     let num = 9;
//     if (num > 1 && num % 1 == 0) {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 console.log('Херня');
//                 break;
//             } else {
//                 console.log('Огонь');
//                 break;
//             }

//         }
//     } else {
//         console.log('Херня');
//     }
// }

// checkNum();



// передача данных по ссылке и по значению 

// если идет взаимодействие с простыми типами данных числа тсроки то поередается по значению 



// если идет взаимодествие с объектами(массивы и тэ дэ) то происходит передача п оссылке 
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // ссылка (рабоатем не с копией а ссылкой)

// copy.a= 10;
// let a = 5,
//     b = a;


// b = b + 5;

// console.log(b);
// console.log(a);
// console.log(copy);
// console.log(obj);

// функция для копирвоания объектов только поверхностыне копии
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };


// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);


// метод позволяющий соединить объекты 

// const add = {
//     d: 17,
//     e: 20
// };


// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// метод для копирвоаняи массива 
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdasdasdasdas';

// оператор разворота для массивов

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);



// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// оператор разворота для объектов


// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };


// const newObj = {...q};




// // ООП 

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));



// const soldier = {
//       health: 400,
//       armor: 100
// };


// // const john = {
// //     health: 100
// // };

// // создаем прототип для джона в виде общего солдата такой метод используется сли джон уже создан
// Object.setPrototypeOf(john, soldier);


// // создаем объект который сразу наследует от прототипа свойства или функции илиметоды 
// const john = Object.create(soldier);


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        // услови пока пользователь вводит пустую строку или нажимает отмену или вводит не число, тогда вопрос будет повторяться 
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели неправиально или вообще не вввели');
                i --;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }


        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }


};


// конец практики 