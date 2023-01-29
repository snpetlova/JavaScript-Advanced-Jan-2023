function solve() {
    const firstOptEl = document.createElement('option');
    const secondOptEl = document.createElement('option');
    firstOptEl.value = 'binary';
    secondOptEl.value = 'hexadecimal';
    firstOptEl.innerHTML = 'Binary';
    secondOptEl.innerHTML = 'Hexadecimal';

    const menuToEl = document.getElementById('selectMenuTo');
    menuToEl.appendChild(firstOptEl);
    menuToEl.appendChild(secondOptEl);

    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function () {
        const numberInput = document.getElementById('input');

        const outputRes = document.getElementById('result');

        if(menuToEl.value === 'binary') {
            outputRes.value = Number(numberInput.value).toString(2);
        } else if (menuToEl.value === 'hexadecimal') {
            outputRes.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    })
}