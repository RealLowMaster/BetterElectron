
const { app } = require('electron')
const { ReplacePathNames } = require('./System/PathControl')

let test = "{documents}/myapp"

console.log(test)

ReplacePathNames(test)

console.log(test)