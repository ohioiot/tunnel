
require('dotenv').config();

const ngrok = require('ngrok');
const parseUrl = require('./parse');

let options = {
	proto: 'tcp',
	addr: 22,
	authtoken: process.env.NGROK_TOKEN
}

let connect = async function() {

	console.log("requesting a tunnel...");

	const url = await ngrok.connect(options);
	console.log("url: "+url);

	let parsedUrl = parseUrl(url);
	console.log("the command we should paste into the command line");
	console.log("\n\t"+parsedUrl+"\n");

}

connect();


setTimeout( async function() {

	await ngrok.disconnect();
	await ngrok.kill();
	console.log("...disconnected");

}, 3000);
