import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'
import jwt from "jsonwebtoken";
import ErrorResponse from '../utilis/errorResponse.js';



//@dec       User Sign Up
//@route     Post/api/auth/signup
//@acess     Public
export const singUp = asyncHandler(async (req,res) => {
    const {username,password} = req.body
    const existUser =  await User.findOne({username})
      
    if(existUser){
        res.status(400)
        throw new ErrorResponse("User already exist")
    }
      
     const user = new User({
        username : username,
        password : password
     })
     
     await user.save();
     if (user) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });
        const { password: pass, ...rest } = user._doc;
        res.cookie("jwt", token, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: 365 * 24 * 60 * 60 * 1000, // 365 Days
        });
        res.status(200).json({ token, ...rest }); // Return token along with user data
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }

})






//@dec        User Sign In or log in
//@route     Post/api/auth/signin
//@acess     Public
export const signIn = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!password) {
      throw new ErrorResponse("Password should not be empty");
    }
  
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });
  
      const { password: pass, ...rest } = user._doc;
  
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 365 * 24 * 60 * 60 * 1000, //30Days
      });
      res.status(200).json({ token, ...rest }); // Return token along with user data
    } else {
      res.status(404).json({ message: "Invalid username and password" });
    }
  });