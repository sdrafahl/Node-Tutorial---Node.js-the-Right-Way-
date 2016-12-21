"use strict";
const 
    fs = require('fs'),
    net = (require('net')),
    filename = process.argv[2],

    server = net.createServer(function(connection){
        
        //reporting
        console.log('Subscriber Connected.');
        connection.write("Now watching'" + filename + "' for changes....\n ");

        //watcher
        let watcher = fs.watch(filename, function(){
            connection.write("File '" + filename +"' changed: " + Date.now() + "\n");
        });
        //cleanup
            connection.on('close', function(){
            console.log('Subscriber Disconnected');
            watcher.close();
        });

    });

    if(!filename){
        throw Error('No target filename was specified');
    }

    server.listen(5432,function(){
        console.log('Listening for subscribers...');
    })
    

    

   
    server.listen(5432);