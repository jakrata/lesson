let money = 90000; //Доход за месяц
let income = '10000'; //Дополнительный доход 
let addExpenses = '25000'; //Расходы
let deposit = false; //Булевое значение
let misson = 1000000; //Какую сумму накопить
let period = 24; //Период в месяцах
let budgetDay = money / 30; //Дневной бюджет

console.log(typeof money); //Вывод тип данных 
console.log(typeof income); //Вывод тип данных 
console.log(typeof deposit); //Вывод тип данных 
console.log(addExpenses.length); //Вывод длинны строки
console.log('Период равен ' + period + ' месяца');
console.log('Цель заработать ' + misson + ' рублей');
console.log(addExpenses.toLocaleLowerCase().split(', ')); //Перевод в нижний регистр, разбил строку на массив
console.log(budgetDay); //Вывод новой переменной