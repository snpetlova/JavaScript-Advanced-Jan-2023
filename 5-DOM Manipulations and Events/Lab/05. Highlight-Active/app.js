function focused() {
   const inputs = document.querySelectorAll('input');
   const inputsArray = Array.from(inputs);

   for (let input of inputsArray) {
    input.addEventListener('focus', () => {
        input.parentElement.className = 'focused';
    });
    input.addEventListener('blur', () => {
        input.parentElement.className = '';
    });
   }
}