const fs = require('fs');
fs.watch('target.txt', function (){
    console.log("File 'target.txt' just changed! ");
});
console.log("Now Watching target.txt for changes...");