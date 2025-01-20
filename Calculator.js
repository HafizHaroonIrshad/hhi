let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = "";

for (let item of buttons) {
    screenvalue = "";
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText === '*') {
            buttonText = '*';
            screenvalue += buttonText;
            screen.value += buttonText;
        } 
        else if (buttonText === 'C') {
            screenvalue = "";
            screen.value = "";
        }else if (buttonText === '/') {
            screenvalue += buttonText;
            screen.value += buttonText;
        } else if (buttonText === '+') {
            screenvalue += buttonText;
            screen.value += buttonText;
        } else if (buttonText === '-') {
            screenvalue += buttonText;
            screen.value += buttonText;
        } else if (buttonText === '=') {
            screen.value = eval(screenvalue);
        } else if (buttonText === '√') {
            const num = parseFloat(screenvalue);
            if (!isNaN(num)) {
                screen.value = Math.sqrt(num);
            }
        } else if (buttonText === 'x²') {
            const num = parseFloat(screenvalue);
            if (!isNaN(num)) {
                screen.value = num * num;
            }
        } else if (buttonText === 'DEL') {
            screenvalue = screenvalue.slice(0, -1);
            screen.value = screenvalue;
        } else {
            screenvalue += buttonText;
            screen.value += buttonText;
        }
    });
}