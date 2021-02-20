const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

const verifyToken = (req, res, next) => {
  let token = req.header["x-access-token"];

  if(token){
    jwt.verify(token, config.secret, (err, decode) => {
      console.log(decode);
      if(err){
        res.status(400).json({message: "Unauthorized"})
      }
    })
  } else{
    jwt.sign(token, config.secret, {expiresIn: '5m'})
    res.status(400).json({message: "No token"})
  }

}

// module.exports = verifyToken
