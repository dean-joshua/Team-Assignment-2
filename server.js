const express = require("express");
const app = express();

// We need to use this in order to fetch from other local host
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use('/', require('./routes'))
app.use('/professional', require('./routes/professional'));

app.listen(process.env.port || 8080);
console.log("Web Server is listening at port " + (process.env.port || 8080));