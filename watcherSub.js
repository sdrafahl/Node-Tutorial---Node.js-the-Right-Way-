"use strict";
const
    zmq = require('zmq'),

    //Creates Endpoint
    subscriber = zmq.socket('sub');

    //subscribe
    subscriber.subscribe("");

    //handle messages
    subscriber.on("message",function(data){
        let
            message = JSON.parse(data);
            console.log("File '" + message.file + "' changed at " + message.timestamp);


    });
    //connect
    subscriber.connect("tcp://localhost:2002");