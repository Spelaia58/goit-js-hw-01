let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

 let value = prompt('введите количество шт');
 value = Number(value);

 value === null? 'Отменено пользователем' : totalPrice = value * pricePerDroid;

 if(totalPrice > credits) {
    console.log('Недостаточно средств на счету');
}else {
    credits = credits - totalPrice;
    console.log( `Вы купили ${value} дроида , на счету осталось ${credits} кредитов.`)
}

