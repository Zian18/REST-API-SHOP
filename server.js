const http = require('http');
const router = require('./api/routes/products');
const app = require('./app');


const PORT = process.env.PORT || 8085;
const server = http.createServer(app);

const port = 8085;
app.listen(port,()=>{
    console.log("server started successfully at port " + port);
});

