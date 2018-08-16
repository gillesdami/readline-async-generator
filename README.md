# readline-async-generator

ES8 async generator for nodejs readline on stdin. Requiere node 10+.

## install

```bash
yarn add readline-async-generator
```

## usage

```js
const readlineAsyncGenerator = require("readline-async-generator");

(async function(){
    const lineIt = readlineAsyncGenerator();

    for await(const line of lineIt) {
        //do something with the stdin line
    }
})();
```