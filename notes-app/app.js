const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js');
fs.appendFileSync('notes.txt', '. And this is extra information with the use of my new tool appendFileSync')