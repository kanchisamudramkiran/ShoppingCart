import express from 'express'
const router = express.Router()
import {getUsers,authUser} from '../controller/userController.js'
// @desc  Fetch all the products
// @route GET /api/products
// @access Public
router.get('/',getUsers)
router.get('/login',authUser)


export default router