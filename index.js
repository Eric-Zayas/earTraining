const express = require('express');
const app = express();

app.get('/', function(req, res){
  express.static('/Client')
});

app.listen(3000);