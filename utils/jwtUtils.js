const jwt = require("jsonwebtoken");
const { secreatekey } = require("../config/jwtConfig");

function generateToken (user){

    const payload = {
        id : user._id,
        email: user.email,
        role : user.role 

    }
    return jwt.sign(payload, secreatekey, {expiresIn : "2h"})
}

export {generateToken}