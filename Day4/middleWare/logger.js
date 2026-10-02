function logger(req, res, next){
    const time=new Date().toISOString

    console.log(`${time} - ${req.method} ${req.url}`);

    next(); // tells express middleware processing is complete, continue to next middleware.


}

function secondMiddleware(req, res, next){
    console.log("Second Middleware");
    next();
}

module.exports=logger;