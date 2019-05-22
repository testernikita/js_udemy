let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: [],
      savings: false
   },
    requiredCost1 = prompt("Введите обязательную статью расходов в этом месяце"),
    costValue1 = prompt("Во сколько обойдется?"),
    requiredCost2 = prompt("Введите обязательную статью расходов в этом месяце"),
    costValue2 = prompt("Во сколько обойдется?");

appData.expenses[requiredCost1] = costValue1;
appData.expenses[requiredCost2] = costValue2;

alert(appData.budget / 30);