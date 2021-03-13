'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expensesSale = prompt("Введите обязательную статью расходов в этом месяце", "");
let expensesMoney = prompt("Во сколько обойдется", "");
let oneDayMoney;

let appData = {
   cash: money,
   timeData: time,
   expenses: {
      expensesSale: expensesMoney
   },
   optionalExpenses: {

   },
   income: [],
   savings: false




};
alert(oneDayMoney);