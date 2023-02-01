function deleteByEmail() {

    let email = document.querySelector('input[name="email"]').value; //input
    let rows = document.querySelectorAll('#customers tbody tr'); 
    let rowsArray = Array.from(rows);

    let isDeleted = false;
    
    for (let row of rowsArray) {
        let currEmail = row.children[1];
        
        if (currEmail.textContent === email) {
            row.remove();
            isDeleted = true;
        }
    }

    document.getElementById('result').textContent = isDeleted ? 'Deleted.' : 'Not found.'
}