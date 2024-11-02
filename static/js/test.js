let buttons = document.querySelectorAll('button')
let total = document.querySelector('#total')

buttons.forEach(element => {
    element.addEventListener('click', function() {
        switch(total.textContent){
            case '0':
                total.textContent = element.textContent
                break
            default:
                total.textContent += element.textContent
                break
        }
    })
})  