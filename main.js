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


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');  
    }   else {
        console.log('error');
        i--;
    }   

           
}


if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB >= 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);



