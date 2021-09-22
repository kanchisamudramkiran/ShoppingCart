import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
const getUsers = asyncHandler(async (req, res) =>{

    const users = await User.find({})
      res.json(users);
  });


  const authUser = asyncHandler(async (req, res) =>{
    console.log(req.body)

    const { email, password } = req.body;
    const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    //   token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }

// res.send({email, password})
    // const users = await User.find({})
    //   res.json(users);
  });

  export {
    getUsers  , authUser 
  }