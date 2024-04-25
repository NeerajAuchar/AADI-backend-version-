const {constant } = require("../constants");

const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode :500;

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({ title : "Validation Failed " , message: err.message, stackTrace: err.stcak,});            
            break;
            
        case constant.NOT_FOUND:
            res.json({ title : "Not Found", message: err.message, stackTrace: err.stcak,});
            break;

        case constant.UNAUTHORIZED:
            res.json({ title : "Unauthorised", message: err.message, stackTrace: err.stcak,});
            break;

        case constant.FORBIDEN:
            res.json({ title : "Forbiden", message: err.message, stackTrace: err.stcak,});
            break;
        
        case constant.SERVER_NOT_FOUND:
                res.json({ title : "Server Not found", message: err.message, stackTrace: err.stcak,});
                break;    

        default:
            console.log("No error all good "); 
            break;
    }
   

};

module.exports = errorHandler ;