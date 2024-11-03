let buttons = document.querySelectorAll('button');
let total = document.querySelector('#total');

buttons.forEach(element => {
    element.addEventListener('click', function() {
        switch(element.textContent){
            case 'C':
                total.textContent = '0';
                break;
            case '=':
                total.textContent = eval(total.textContent)
                break;
            case '%':
                let getPercent = total.textContent + '/100';
                total.textContent = eval(getPercent);
                break;
            case '√':
                let sqrt = total.textContent + '**0.5';
                total.textContent = eval(sqrt);
                break;
            case '←':
                let exp = total.textContent;
                total.textContent = exp.substring(0, exp.length-1);
                break;
            default:
                if(total.textContent == '0' && element.textContent != '.')
                    total.textContent = element.textContent;
                else total.textContent += element.textContent;
        }
    })
})