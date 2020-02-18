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