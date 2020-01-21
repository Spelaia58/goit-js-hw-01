let credits = 23580;
const pricePerDroid = 3000;
let value;
let totalPrice;

 value = prompt('введите количество шт');
 value = Number(value);
 
if (value) {
totalPrice = value * pricePerDroid;
console.log(`Общая стоимость заказа ${totalPrice} кредитов. Проверка количества доступных средств на счету.`);

 if(credits < totalPrice){
console.log('Недостаточно средств на счету');
}else{
    credits = credits - totalPrice;
    console.log(`Вы купили ${value} дроидов , на счету осталось ${credits} кредитов`);
}
}
else {
console.log('Отменено пользователем');
}

