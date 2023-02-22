function solve() {

    const nameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const list = document.getElementById('list');
    const deleted = document.querySelector('.delete-list');
    const sent = document.querySelector('.sent-list');

    document.getElementById('add').addEventListener('click', createMail);
    document.getElementById('reset').addEventListener('click', reset);

    function createMail(event) {
        event.preventDefault();
        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == '' || title == '' || message == '') {
            return;
        }

        const element = document.createElement('li');
        element.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`

        list.appendChild(element);
        resetInput();

        element.querySelector('#send').addEventListener('click', sendMail);
        element.querySelector('#delete').addEventListener('click', deleteMail);


        function sendMail() {
            const sentMailEl = document.createElement('li');
            sentMailEl.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>
                <div class="btn">
                    <button type="submit" class="delete">Delete</button>
                </div>`

                sent.appendChild(sentMailEl);
                element.remove();

            sentMailEl.querySelector('.delete').addEventListener('click', () => {
                const deletedEl = document.createElement('li');
                deletedEl.innerHTML = `
                    <span>To: ${name}</span>
                    <span>Title: ${title}</span>`

                deleted.appendChild(deletedEl);
                sentMailEl.remove();
            });
        }

        function deleteMail() {
            const deletedMailEl = document.createElement('li');
            deletedMailEl.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;

            deleted.appendChild(deletedMailEl);
            element.remove();
        }

    }

    function reset(event) {
        event.preventDefault();
        resetInput();
    }

    function resetInput() {
        nameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}



solve()