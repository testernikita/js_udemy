let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
         budget: money,
         timeData: time,
         expenses: {
            requiredCost1: prompt("Введите обязательную статью расходов в этом месяце"),
            costValue1: prompt("Во сколько обойдется?"),
            requiredCost2: prompt("Введите обязательную статью расходов в этом месяце"),
            costValue2: prompt("Во сколько обойдется?")
         },
         optionalExpenses: {},
         income: [],
         savings: false
     };
appData.expenses.requiredCost1 = appData.expenses.requiredCost2;
appData.expenses.costValue1 = appData.expenses.costValue2;
alert(appData.budget / 30);