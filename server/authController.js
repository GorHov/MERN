const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('./config')
const { validationResult } = require('express-validator')

const generateAccessToken = (id,roles) => {
   const payload = {
    id,
    roles
   }

   return jwt.sign(payload , secret , {expiresIn: '24h'})
}

class authController {
  
    async registration(req,res){
      try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
          return res.status(400).json({message : 'registration error',errors})
        }
        const {username, password} = req.body
        const candidate = await User.findOne({username})

        if(candidate){
         return res.status(400).json({message : 'User already exist'})
        }
        const hashPassword = bcrypt.hashSync(password, 8);
        const userRole = await Role.findOne({value : 'USER'})
        const user = new User({username, password : hashPassword ,roles: [userRole.value]})
        await user.save()
        return res.json({message : 'user saved'})
      } catch (error) {
        console.log(error)
        res.status(400).json({message : 'Registration error'})
      }
    }

    async login(req,res){
      try {
        const {username, password} = req.body
        const user = await User.findOne({username})

        if(!user){
          return res.status(400).json({message : `User with username ${username} not found`})
         }

         const validPassword = bcrypt.compareSync(password, user.password)

         if(!validPassword){
          return res.status(400).json({message : 'wrong password'})
         }

         const token = generateAccessToken(user._i, user.roles)

         return res.json({token})
      } catch (error) {
        console.log(error)
        res.status(400).json({message : 'Login error'})
      }  
    }

    async getUsers(req,res){
      try {
        const users = await User.find()
        res.json(users)
      } catch (error) {
        console.log(error);
      }  
    }
}

module.exports = new authController()