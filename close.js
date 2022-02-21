
require('dotenv').config();

let mqtt = require('./mqtt')('close');
let path = process.env.MQTT_USER+"/tunnel/";

mqtt.subscribe(path+'disconnected');

mqtt.on('message', function() {
	console.log('disconnection confirmed');
	process.exit();
})

mqtt.on('connect', function() {
	console.log("requesting disconnect");
	mqtt.publish(path+'disconnect');
})

setTimeout(function() {
	process.exit();
}, 4000);