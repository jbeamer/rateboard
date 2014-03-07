var	fs 			= require("fs"),
	url 		= require("url");

function start(response, request) {
	console.log("  Rate Board");
	response.writeHead(200, {"Content-Type": "text/html"});
	
	response.write('<html>\n<head>\n <title>Progressive Rate Board</title>\n</head>\n<body>\n');
	response.write('<center>\n<table border="1" style="width:220px">\n');
	response.write('<tr><td colspan="2"><center><img src="logo_prog_direct.gif"/></center></td></tr>\n');
	
	var queryData = url.parse(request.url, true).query;
	if (queryData.name) {
		response.write('<tr><td colspan="2">' + queryData.name + '</td></tr>\n');
	}
	if (queryData.company1) {
		response.write('<tr>\n <td>' + queryData.company1.toUpperCase() + '</td>\n <td><center>' + queryData.rate1 + '</center></tr>\n');
	} 
	if (queryData.company2) {
		response.write('<tr>\n <td>' + queryData.company2.toUpperCase() + '</td>\n <td><center>' + queryData.rate2 + '</center></tr>\n');
	} 
	if (queryData.company3) {
		response.write('<tr>\n <td>' + queryData.company3.toUpperCase() + '</td>\n <td><center>' + queryData.rate3 + '</center></tr>\n');
	} 	
	if (queryData.company4) {
		response.write('<tr>\n <td>' + queryData.company4.toUpperCase() + '</td>\n <td><center>' + queryData.rate4 + '</center></tr>\n');
	}
	
	response.write('</center>\n</table>\n</body>\n</html>\n');
	response.end();
}

function logo(response, request) {
	var img = fs.readFileSync('./logo_prog_direct.gif');
	response.writeHead(200, {'Content-Type': 'image/gif' });
	response.end(img, 'binary');
}


exports.start 	= start;
exports.logo 	= logo;
