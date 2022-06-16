"use strict";
const someArray = [9, 2, 5];
for (const item in someArray) {
    console.log('for...in: ' + item);
}
for (const item of someArray) {
    console.log('for...of: ' + item);
}
