import mongoose from 'mongoose'

const roleSchema = mongoose.Schema({
  name: String,
  role: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const RoleDescription = mongoose.model('RoleDescription', roleSchema)

export default RoleDescription