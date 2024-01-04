const customServer = require('./server');

const server = customServer();

function test(req, res, next) {
    console.log('middleware')
    next();
}

// ROUTE PARAMETERS
server.get("/products/:id", test,(req, res) => {
    console.log("query params", req.query);
    console.log('req.params', req.params);
    res.send("product id");
});


server.listen(3000, () => {
    console.log('server is on ')
})