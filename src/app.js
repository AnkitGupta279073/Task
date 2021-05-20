require('./db/conn');
const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./router/route'));
const port = process.env.PORT || 4000;

app.listen(port,()=>{console.log(`server is running on ${port}`)});
