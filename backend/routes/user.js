import { register,login,MovieBooking,getAllUser,myprofile} from "../controller/user.js";
import express from 'express'
import auth from '../middleware/auth.js'
import user from '../middleware/user.js'

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.put('/moviebooking',[auth,user],MovieBooking)
router.get('/viewall',getAllUser)
router.get('/profile',[auth,user],myprofile)

export default router