

const ngrok = require('ngrok');

let options = {
	proto: 'tcp',
	addr: 22,
	authtoken: process.env.NGROK_TOKEN
}


module.exports = {

	connect: async function() {
		try {
			console.log("requesting a tunnel...");
			const url = await ngrok.connect(options);
			console.log("url: "+url);
			return url;
		} catch(err) {
			console.log(err);
		}
	},

	discconnect: async function() {
		try {
			await ngrok.disconnect();
			await ngrok.kill();
			console.log("disconnected");
			return true;
		} catch(err) {
			console.log(err);
		}
	}
}