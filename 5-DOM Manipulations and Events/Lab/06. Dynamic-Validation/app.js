function validate() {
    let regex = /[A-z]+@[A-z]+.[A-z]+/g;
    let emailInput = document.getElementById('email');
    
    emailInput.addEventListener('change', () => {
        if (!regex.test(emailInput.value)) {
            emailInput.className = 'error';
        } else {
            emailInput.className = '';
        }
    });
}