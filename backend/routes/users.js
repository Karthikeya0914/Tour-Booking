import express from 'express'
import { getAllUser, getSingleUser,updateUser,deleteUser, createUser} from '../controllers/userController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
//create useer
router.post('/', createUser)
// update  User
router.put('/:id',verifyUser, updateUser)

// delete User
router.delete('/:id',verifyUser, deleteUser)

// getsingle User
router.get('/:id', verifyUser,getSingleUser)

// get All User
router.get('/',verifyAdmin, getAllUser)

export default router