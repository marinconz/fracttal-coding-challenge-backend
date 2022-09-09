import express from 'express'

import { getRoles, createRole, updateRole, deleteRole } from '../controllers/roles.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getRoles)
router.post('/', auth, createRole)
router.patch('/:id', auth, updateRole)
router.delete('/:id', auth, deleteRole)

export default router