import express from 'express'
const router = express.Router()
import {getUsers,authUser, getUserProfile} from '../controller/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// @desc  Fetch all the products
// @route GET /api/products
// @access Public
router.get('/',getUsers)
router.get('/login',authUser)
// router.route('/profile').get(getUserProfile)
router
  .route('/profile')
  .get(protect, getUserProfile)

export default router