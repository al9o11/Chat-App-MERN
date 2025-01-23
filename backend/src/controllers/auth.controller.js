import { generateToken } from '../lib/utils.js';
import User from '../models/user.model.js';
import cloudinary from '../lib/cloudinary.js';

import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  const {fullname,email, password} = req.body;
  try {
    if(!fullname || !email || !password){
      return res.status(400).json({message: "All fields are required"});
    };
    if(password.length < 6){
      return res.status(400).json({message: "Password must be at least 6 characters long"});
    };

    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({message: "User already exists"});
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
      fullname : fullname,
      email : email,
      password : hashedPassword
    });

    if (newUser) {
      generateToken(newUser._id,res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
      
    } else {
      res.status(400).json({message: "User not created"});
      
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
    
  }
};

export const login= async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({message: "All fields are required"});
  };
  try {
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message: "Invalid credentials"});
    };

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(400).json({message: "Invalid credentials"});
    };

    generateToken(user._id,res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      profilePic: user.profilePic,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token","",{maxAge:0});
    res.status(200).json({message: "Logged out"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
    
  }
}; 

export const updateProfilePic = async (req, res) => {
  try {
    const {profilePic} = req.body;
    const userId = req.user._id;

    if(!profilePic){
      return res.status(400).json({message: "Profile pic is required"});
    }

    const uploadRes = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await User.findByIdAndUpdate(userId,{profilePic:uploadRes.secure_url},{new:true});

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }
};

export const checkAuth = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }
};