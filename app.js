const input = document.getElementById('input');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const doubleZero = document.getElementById('double-zero');
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.innerText;

        switch (buttonText) {
            case '√':
                input.value = Math.sqrt(eval(input.value));
                break;
            case '%':
                input.value = eval(input.value) / 100;
                break;
            case '³':
                input.value = Math.pow(eval(input.value), 3);
                break;
            case 'log':
                input.value = Math.log10(eval(input.value));
                break;
            case '00':
                input.value += '00';
                break;
            case '=':
                try {
                    let result = eval(input.value);
                    input.value = result;
                } catch (error) {
                    input.value = 'Error';
                }
                break;
            default:
                input.value += buttonText;
                break;
        }
    });
});

clear.addEventListener('click', () => {
    input.value = '';
});
