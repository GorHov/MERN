const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = (roles) => {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(403).json({ message: "User not registered1" });
      }

      const {roles : userRoles} = jwt.verify(token, secret);
      let hasRole = false

      userRoles.forEach( (role) => {
         if(roles.includes(role)){
           hasRole = true
         }
      })
      if(!hasRole){
        res.status(403).json({ message: "You Have not permission" });
      }
      next();
    } catch (error) {
      res.status(403).json({ message: "User not registered2" ,error});
    }
  };
};
