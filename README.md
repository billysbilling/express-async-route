## Usage

```javascript
var wrap = require("express-async-route");

var myHandler = wrap(function (req, res) (
    return new Promise(function(resolve, reject) {
        reject(new Error("rejected!"));
    });
));

////////////////////////

app.get("/", myHandler);
```

Or using babel

```javascript
// in handler module
import wrap from 'express-async-route'

export default wrap(async function () {
    throw new Error('rejected')
})

////////////////////////

app.get("/", require('./my-handler'))
```
