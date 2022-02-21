

const mqtt = require('mqtt');


module.exports = function(clientId) {

	const username = process.env.MQTT_USER;
	const password = process.env.MQTT_PASSWORD;
	const host = process.env.MQTT_HOST;

	let options = {
		port: 8883,
		username,
		password,
		clientId,
		protocol: 'mqtts',
		host,
		qos: 3
	}

	console.log("<< opening mqtt connection for '"+clientId+"'");

	let connection = mqtt.connect(options);

	return connection;

}