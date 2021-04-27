# Node

Written in C++, nodeJs is a javascript runtime environment, which allows JS to be run on the server. It uses the V8 engine (written by google) to compile JS.

## Install

1. visit nodejs.org 
2. download and install 

```
// check version of node
node -v 

// enter repl
node

// run a file 
node <fileName.js>

// write out/create to a file
const fs = require('fs');
fs.writeFileSync(<fileName.txt>, <message to write in the file>);
```
