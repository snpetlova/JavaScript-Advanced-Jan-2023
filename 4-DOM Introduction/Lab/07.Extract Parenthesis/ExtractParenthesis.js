function extract(elementId) {
    let para = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let res = [];

    let match = pattern.exec(para);
    while(match) {
        res.push(match[1]);
        match = pattern.exec(para);
    }
    return res.join('; ')

}