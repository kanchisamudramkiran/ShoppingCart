import express from 'express'
const router = express.Router()
import {getUsers,authUser,registerUser, getUserProfile, updateUserProfile,deleteUser,getUserById, updateUser} from '../controller/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// @desc  Fetch all the products
// @route GET /api/products
// @access Public
router.get('/',getUsers)
router.get('/login',authUser)
router.route('/register').post(registerUser)
.get(protect, admin, getUsers)

router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router