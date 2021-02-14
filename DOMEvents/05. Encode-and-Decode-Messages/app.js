function encodeAndDecodeMessages() {
    const messageToEncode = document.getElementsByTagName('textarea')[0];
    const messageToDecode = document.getElementsByTagName('textarea')[1];
    const encodeButton = document.getElementsByTagName('button')[0];
    const decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', () => {
        let text = messageToEncode.value;
        let encode = '';
        for (let i = 0; i < text.length; i++) {
            encode += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        messageToEncode.value = '';
        messageToDecode.value = encode;
    });

    decodeButton.addEventListener('click', () => {
        let message = messageToDecode.value;
        let decode = '';
        for (let i = 0; i < message.length; i++) {
            decode += String.fromCharCode(message.charCodeAt(i) - 1);
        }
        messageToDecode.value = decode;
    });
}