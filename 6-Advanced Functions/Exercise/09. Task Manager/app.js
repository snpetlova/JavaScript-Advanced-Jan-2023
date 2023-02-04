function solve() {
    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    const [inputSection, openSection, progressSection, completeSection] = document.querySelectorAll('section');

    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', addToDo);

    function addToDo(event) {
        event.preventDefault();

        if(inputDate.value.trim() === '' || inputDesc.value.trim() === '' || inputTask.value.trim() === '' ) {
            return;
        }
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;

        const pDesk = document.createElement('p');
        pDesk.textContent = `Description: ${inputDesc.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${inputDate.value}`;

        const divButtons = document.createElement('div');
        divButtons.classList.add('flex');

        const startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', startArticle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteArticle);

        divButtons.appendChild(startButton);
        divButtons.appendChild(deleteButton);
        article.appendChild(h3);
        article.appendChild(pDesk);
        article.appendChild(pDate);
        article.appendChild(divButtons);

        openSection.lastElementChild.appendChild(article);

        inputDate.value = '';
        inputDesc.value = '';
        inputTask.value = '';

        function deleteArticle() {
            article.remove();
        }

        function startArticle() {
            startButton.remove();

            const finishButton = document.createElement('button');
            finishButton.classList.add('orange');
            finishButton.textContent = 'Finish';
            finishButton.addEventListener('click', finishArticle);
            divButtons.appendChild(finishButton);
            progressSection.lastElementChild.appendChild(article);
        }

        function finishArticle() {
            divButtons.remove();
            completeSection.lastElementChild.appendChild(article);
        }
    }
}