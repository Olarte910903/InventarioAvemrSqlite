document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('item-form');
    

        form.addEventListener('submit', function (event) {

            const name = document.getElementById('name').value.trim();
            const amount = document.getElementById('amount').value;
            const price = document.getElementById('price').value;

            const nameHelp = document.getElementById('nameHelp');
            const amountHelp = document.getElementById('amountHelp');
            const priceHelp = document.getElementById('priceHelp');

            if (name === '') {
                event.preventDefault();
                nameHelp.style.color = 'red';
                return;
            } 

            if (amount < 0) {
                event.preventDefault();
                amountHelp.innerHTML = 'El valor no puede ser menor que 0';
                amountHelp.style.color = 'red';
            }

            if (price < 0) {
                event.preventDefault();
                priceHelp.innerHTML = 'El valor no puede ser menor que 0';
                priceHelp.style.color = 'red';
            }

        })
})

