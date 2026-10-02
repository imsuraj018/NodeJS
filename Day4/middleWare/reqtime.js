
function requestTime(req, res, next){

    req.reqtime=new Date();
    next();
}

module.exports=requestTime;