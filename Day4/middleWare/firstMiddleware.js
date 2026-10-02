function firstMiddleware(req, res, next){
    console.log("First Middleware");
    next();
}
