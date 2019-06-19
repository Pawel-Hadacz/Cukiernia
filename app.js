const http = require('http');
//const fs = require('rs');
const express = require('express');
const app = express();

const server =  http.createServer(app);
  

server.listen(3000);