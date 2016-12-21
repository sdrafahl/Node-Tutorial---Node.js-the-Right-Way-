"use strict";
const
    net = require('net'),
    ldj = require('./idj.js'),

    netClient = net.connect({port:2002}),
    ldjClient = ldj.connect(netClient);

    ldjClient.on('message', function(message){
        if(message.type === 'watching'){
            console.log("Now Watching: " + message.file);

        }else if (message.type === 'changed'){
            console.log(
                "File '" + message.file + "' changed at " + message.timestamp
            );
        }else{
            throw Error("Unrecognized Message Type: " + message.type);
        }
    });