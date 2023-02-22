function solve() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const tbody = document.getElementById("tbody");
    const budgetSalary = document.getElementById("sum");

    const hireBtn = document.getElementById('add-worker');

    hireBtn.addEventListener('click', hireEmployee);

    function hireEmployee(e) {
        e.preventDefault();

        const fnameValue = fname.value;
        const lnameValue = lname.value;
        const emailValue = email.value;
        const birthValue = birth.value;
        const positionValue = position.value;
        const salaryValue = salary.value;

        if (fnameValue == '' || lnameValue == '' || emailValue == '' || birthValue == '' || positionValue == '' || salaryValue == '') {
            return;
        }

        const tr = document.createElement('tr');

        const td = document.createElement('td');
        td.textContent = fnameValue;

        const td2 = document.createElement('td');
        td2.textContent = lnameValue;

        const td3 = document.createElement('td');
        td3.textContent = emailValue;

        const td4 = document.createElement('td');
        td4.textContent = birthValue;

        const td5 = document.createElement('td');
        td5.textContent = positionValue;

        const td6 = document.createElement('td');
        td6.textContent = salaryValue   ;

        const tdBtns = document.createElement('td');

        const firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', fireEmployee);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editEmployee);

        tdBtns.appendChild(firedBtn);
        tdBtns.appendChild(editBtn);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(tdBtns);
        tbody.appendChild(tr);

        let currSalary = Number(budgetSalary.textContent);
        budgetSalary.textContent = (Number(salaryValue) + currSalary).toFixed(2);

        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        function editEmployee() {
            fname.value = fnameValue;
            lname.value = lnameValue;
            email.value = emailValue;
            birth.value = birthValue;
            position.value = positionValue;
            salary.value = salaryValue;

            budgetSalary.textContent = (Number(budgetSalary.textContent) - Number(salaryValue)).toFixed(2);
            tr.remove();
        }

        function fireEmployee() {
            tr.remove()
            budgetSalary.textContent = (Number(budgetSalary.textContent) - Number(salaryValue)).toFixed(2);
        }
    }

}
solve()