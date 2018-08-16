const readline = require('readline');

module.exports = async function* readlineAsyncGenerator() {
    const rl = readline.createInterface({input: process.stdin}),
        lines = [];
    let resolve,
        promise = new Promise(r => resolve = r),
        close;

    rl.on('line', line => {
        lines.push(line);
        resolve();
    });

    while (!close) {
        await promise;
        close = ((yield lines.pop()) || {}).close;
        if(!lines.length) promise = new Promise(r => resolve = r);
    }

    rl.close();
}