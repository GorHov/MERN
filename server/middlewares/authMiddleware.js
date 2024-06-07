const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = (req,res,next) => {
    if(req.method === "OPTIONS"){
        next()
    }

    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            res.status(403).json({message: 'User not registered'})
        }

        const decodedData = jwt.verify(token , secret)
        req.user = decodedData
        next()
    } catch (error) {
        res.status(403).json({message: 'User not registered'})
    }
}