let total = 0;

while(true) {
    let input = prompt('Введите число');
    if (input === null){
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);

    if(notANumber) {
        alert('Было введено не число');
        continue;
    }

    total += input;
    
    }
    alert(`Общая сумма чисел равна ${total}`);