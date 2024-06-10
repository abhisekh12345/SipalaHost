import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,"Please Provide a name"]
    },
    password : {
        type : String,
        required : [true, "Please Provide a email"]
    },
    isAdmin : {
        type : Boolean,
        required : true,
        default : false,
    },
})


userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
 }
 
 
 // Use Mongoose pre-save middleware to hash the password before saving
 userSchema.pre('save', async function (next) {
     // Hash the password only if it's modified (or a new user)
     if (!this.isModified('password')) {
       return next();
     }
   
     try {
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(this.password, salt);
       this.password = hashedPassword;
       next();
     } catch (error) {
       next(error);
     }
   });






const User = mongoose.model('User',userSchema)
export default User