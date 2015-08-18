## Usage

```javascript
var wrap = require("express-async-route");

module.exports = wrap(function (req, res) (
    return new Promise(function(resolve, reject) {
        reject(new Error("rejected!"));
    });
));

////////////////////////

app.get("/", myHandler);
```

Or using babel / your favorite ES6/7 transpiler magic

```javascript
// in handler module
import wrap from 'express-async-route'

export default wrap(async function () {
    throw new Error('rejected')
})

////////////////////////

app.get("/", require('./my-handler'))
```
