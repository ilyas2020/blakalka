let money = prompt("Ваш бюджет за месяц?", ""),
    time = prompt("Какое сегодня число?", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
    }   else { i = 0;}
}

appData.moneyPerDay = appData.budget/30;

function detectDayBudgest() {
    alert("Ваш бюджет на день составляет:" + appData.moneyPerDay);
}

//уровень достатка 

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Малый уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Вы богатый человек!!!");
    } else {console.log("Вышла ошибка!")}
}
let = optionalExpenses {

};

function chooseOptExpenses() {
    optionalExpenses.c = prompt("Статья необязательных расходов", "");
    optionalExpenses.g = prompt("Статья необязательных расходов", "");
    optionalExpenses.k = prompt("Статья необязательных расходов", "");
}
chooseOptExpenses();


// let i = 0;
// while(i < 2) {
//     i++;
//     let a = prompt("Введите обязательно статью доходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
// }   else { i = 0;}
// }
// let i = 0;
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//     }   else { i = 0;}
// } while(i < 2);