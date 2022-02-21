

module.exports = function(url) {
	let index1 = url.indexOf('//');
	let index2 = url.indexOf('o:');
	let newUrl = url.slice(index1+2, index2+1);
	let port = url.slice(index2+2);
	let str = "ssh ";
	str += process.env.PI_USERNAME;
	str += "@";
	str += newUrl;
	str += " -p ";
	str += port;
	return str;
}