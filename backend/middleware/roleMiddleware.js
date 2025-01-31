
const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
      
      const userRole = req.user.role;
  
      if (allowedRoles.includes(userRole)) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied. You do not have the required role.' });
      }
    };
  };
  
  module.exports = roleMiddleware;