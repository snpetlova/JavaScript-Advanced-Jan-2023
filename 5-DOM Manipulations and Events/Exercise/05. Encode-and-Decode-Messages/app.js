function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', encodeMessage);
    buttons[1].addEventListener('click', decodeMessage);

    function encodeMessage() {
        let encodedMessage = '';
        let input = textAreas[0].value;
        for (let i = 0; i < input.length; i++) {
            let inputSymbols = input[i];
            encodedMessage += String.fromCharCode(inputSymbols.charCodeAt() + 1);
            textAreas[1].value = encodedMessage;
            textAreas[0].value = '';
        }
    }

    function decodeMessage() {
        let decodedMessage = '';
        let input = textAreas[1].value;
        for(let i = 0; i < input.length; i++) {
            let inputSymbols = input[i];
            decodedMessage += String.fromCharCode(inputSymbols.charCodeAt() - 1);
            textAreas[1].value = decodedMessage;
        }
    }
}