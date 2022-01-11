var elForm = document.querySelector('.form');
var elSelect =document.querySelector('.select');
var elInput = document.querySelector('.input');
var elResult = document.querySelector('.result');

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    var inputValue = elInput.value;
    var selectValue = elSelect.value;
    
    var usd = 10830.00;
    var rub = 110.00;
    var eur = 11800.00;
    
    if (selectValue === "rub" ) {
        elResult.textContent = (rub * elInput.value).toFixed(2)
    } else if (selectValue === "usd") {
        elResult.textContent = (usd * elInput.value).toFixed(2)
    } else if (selectValue === "eur") {
        elResult.textContent = (eur * elInput.value).toFixed(2)
    }else {
        elResult.textContent = 'Iltimos valyutani tanlang'
    }
})