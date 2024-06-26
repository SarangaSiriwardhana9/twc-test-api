import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//signup
export const signup = async (req, res, next) => {
  const {  email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({  email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully !" });
  } catch (err) {
    next(err);
  }
};




export const signin=async(req,res,next)=>{
  const{email, password}=req.body;

  try{
    const validUser = await User.findOne({ email });

if (!validUser) {
  return next(errorHandler(404, 'user not found!'));
}

    const validPassword = bcryptjs.compareSync(password, validUser.password);

if (!validPassword) {
  return next(errorHandler(401, 'wrong credentials'));
}


  const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)

  res.cookie('access_token', token, {
    httpOnly: true
  }).status(200).json(validUser)


  }catch(error){
    next(error)

  }

}

export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
};