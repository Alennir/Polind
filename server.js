var express = require('express');
var path = require("path");
var app = express();
var port = 8080;
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname });
});
 
app.listen(port);
console.log(`server runnig on port ${port} : http://localhost:${port}/`);



