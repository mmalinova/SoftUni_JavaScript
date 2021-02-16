function validate(object) {
    let methods = {
        GET: 0,
        POST: 0,
        DELETE: 0,
        CONNECT: 0,
    };
    let version = {
        'HTTP/0.9': 0,
        'HTTP/1.0': 0,
        'HTTP/1.1': 0,
        'HTTP/2.0': 0,
    };

    if (object.method === undefined || !methods.hasOwnProperty(object.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    const uriReg = /^[\w.]+$/gm;
    if (object.uri === undefined || !object.uri || !uriReg.test(object.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (object.version === undefined || !version.hasOwnProperty(object.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    const messageReg = /^[^<>\\&'"]*$/gm;
    if (object.message === undefined || !messageReg.test(object.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}

console.log(validate({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}
));