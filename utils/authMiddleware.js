const jwt = require("jsonwebtoken");
const { secreatekey } = require("../config/jwtConfig");
function authenticateToken(req,res,next) {

    const authHeader = req.header("Authorization");

    if(!authHeader){
        return req.status(401).json({message : "unAuthorized : missing Token"});
    }
    const {bearer ,token }= authHeader.split(" ");

    if(bearer !== "Bearer" || !token){
      return res.status(401).json({message : "unAuthorized : invalid token format"});
    }

    jwt.verify(token,secreatekey,(err,user)=>{
        if(err){
            return res.status(401).json({message : "forbidden : invalid token"}); 
        }
        req.user = user ;
        next();
    })
    
}

export { authenticateToken }
