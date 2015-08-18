/**
 * Wrap express route handlers to allow for handlers that return promises
 * @param Function fn the hander function that can return a promise
 * @return Function handler for use with express routes.
 */
function wrap (fn) {
    "use strict";
    return function (req, res, next) {
        try {
            var p = fn.apply(undefined, [req, res]);
        } catch (e) {
            next(e);
        }
        if (p.catch && p.then) {
            return p.catch(next); // next()
        }
    };
}

module.exports = wrap;
