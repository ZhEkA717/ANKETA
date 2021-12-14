"use strict";

let fname,lname,sname,age,gender,pencia; 

while (fname == "" || fname == null || fname.length>15) {
    fname = prompt('Ваше Имя?', "Евгений");
}
while (lname == "" || lname == null || lname.length>15) {
    lname = prompt('Ваша Фамилия?', "Грушевский");
}
while (sname == "" || sname == null || sname.length>15) {
    sname = prompt('Ваше Отчество ?', "Сергеевич")
}
while (age == "" || isNaN(age) || age == null ||
    +age < 1 || +age > 135) {
    age = prompt("Ваш возраст?", "21");
}
gender = confirm(
    "Введите ваш пол, если мужской нажмите-ок," + '\n' +
    "если женский-нет"
);

if ((gender && age > 65) || (!gender && age > 60)) {
    pencia = 'Да';
} else {
    pencia = "Нет";
}

gender = gender ? "Мужской" : "Женский";

if (fname != "" && lname != "" && sname != "" &&
    fname.length<15 && lname.length<15 && sname.length<15 &&
    fname != null && lname != null && sname != null &&
    age != "" && +age != NaN) {
    alert(`
        Ваше ФИО: ${lname} ${fname} ${sname} 
        Ваш возраст в годах: ${age}
        Ваш возраст в днях: ${age * 365} 
        Через 5 лет вам будет: ${+age + 5} 
        Ваш пол: ${gender} 
        Вы на пенсии: ${pencia}`
    )
}

