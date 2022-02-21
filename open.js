
require('dotenv').config();

let mqtt = require('./mqtt')('open');
const parseUrl = require('./parse');
const path = process.env.MQTT_USER+"/tunnel/";

mqtt.subscribe(path+'url');

mqtt.on('message', function(topic, payload) {
	let url = payload.toString();
	let str = parseUrl(url);
	console.log("the command we should paste into the command line");
	console.log("\n\t"+str+"\n");
})

mqtt.on('connect', function() {
	console.log("opening tunnel");
	mqtt.publish(path+'connect');
})

setTimeout(function() {
	process.exit();
}, 10000);