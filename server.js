let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');
let app = express();
let PORT = process.env.PORT || 8080
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});