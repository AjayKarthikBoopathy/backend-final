import jwt from "jsonwebtoken"
export async function isAuthenticated(req, res, next){
    const token = req.headers["x-auth-token"];
    if(!token){
      return res.status(400).json({data:"Invalid Authorization"})
     }
    jwt.verify(token, process.env.SECRETKEY)    //comparing the user token with the server side token
    next();     //explicitly switching to next method(in-built)
}

//enter the token in key & value in 'headers' to check login/signup in Postman