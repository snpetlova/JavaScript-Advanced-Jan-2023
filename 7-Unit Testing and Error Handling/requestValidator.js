function solve(inputObj) {

    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (inputObj.hasOwnProperty('method')) {
        if (methods.includes(inputObj['method'] === false)) {
            throw new Error ('Invalid request header: Invalid Method');
        } 
    } else {
        throw new Error ('Invalid request header: Invalid Method');
    }

    const URIpattern = new RegExp (/[^a-zA-Z0-9.]/, 'gim');

    uriStar:
    if (inputObj.hasOwnProperty('uri')) {
        if (inputObj['uri'] === '*') {
            break uriStar;
        } else if (inputObj['uri'].match(URIpattern) || inputObj['uri'] === '') {
            throw new Error ('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error ('Invalid request header: Invalid URI');
    }

    if (inputObj.hasOwnProperty('version')) {
        if (versions.includes(inputObj['version'] === false)) {
            throw new Error ('Invalid request header: Invalid Version');
        } 
    } else {
        throw new Error ('Invalid request header: Invalid Version');
    }

    if (inputObj.hasOwnProperty('message')) {
        const msg = inputObj['message'];
        if (msg.includes('<') || msg.includes('>') || msg.includes('\\') || msg.includes('&') || msg.includes("'") || msg.includes('"')) {
            throw new Error ('Invalid request header: Invalid Message');
        }
    } else {
        throw new Error ('Invalid request header: Invalid Message');
    }

    return inputObj;

} solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
    })