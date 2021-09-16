function encodeAndDecodeMessages() {
    let encodeTextarea = document.getElementsByTagName('textarea')[0];
    let decodeTextarea = document.getElementsByTagName('textarea')[1];
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', () => {
        let encodedMessage = '';
        let text = encodeTextarea.value;
        for (let i = 0; i < text.length; i++) {
            encodedMessage += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        console.log(encodedMessage);
        encodeTextarea.value = '';
        decodeTextarea.value = encodedMessage;

    });

    decodeButton.addEventListener('click', () => {
        let decodedMessage = '';
        let textNew = decodeTextarea.value;
        for (let j = 0; j < textNew.length; j++) {
            decodedMessage += String.fromCharCode(textNew.charCodeAt(j) - 1);
        }
        decodeTextarea.value = decodedMessage;
    });
}