import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModels.js';
import ErrorResponse from '../utilis/errorResponse.js';



// User must be authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;

 
  // Check for token in different places based on environment
  if (req.cookies.jwt) {
    // For web applications
    token = req.cookies.jwt;
  } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // For React Native apps
    token = req.headers.authorization.split(' ')[1];
   
  }

  const check = req.headers.authorization && req.headers.authorization.startsWith('Bearer')
  console.log('check',check)


  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new ErrorResponse('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new ErrorResponse('Not authorized, no token');
  }
});

// User must be an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new ErrorResponse('Not authorized as an admin');
  }
};

export { protect, admin };

