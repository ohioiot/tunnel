
require('dotenv').config();

let path = process.env.MQTT_USER+"/tunnel/";

let mqtt = require('./mqtt')('tunnel');

mqtt.subscribe(path+"connect");
mqtt.subscribe(path+"disconnect");

const {connect, disconnect} = require('./ngrok');

mqtt.on('message', async function(topic) {

	console.log("got a message: "+topic);

	let subTopic = topic.split('/')[2];

	if (subTopic == "connect") {
		let url = await connect();
		console.log("ngrok returned a url: "+url);
		mqtt.publish(path+"url", url);
	}

	if (subTopic == "disconnect") {
		await disconnect();
		console.log("disconnected");
		mqtt.publish(path+"disconnected");
	}

})