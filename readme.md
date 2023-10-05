# Altern npm Package

This is an npm package designed to interact with the [Altern](https://altern.ai) API. 
With it, you can easily check the status of the API and perform 
other functionalities.

## Installation

```bash
npm install altern
```

## Example 

```js
const altern = require('altern');

altern.isStatusSuccess().then(status => {
    console.log(status);  // Returns true if status is 'success'
});
```

## License 

MIT

