import mongoose from 'mongoose'

const logSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: new Date()
  },
  level: { type: String },
  message: { type: String },
  meta: { type: String },
})

const Logs = mongoose.model('Logs', logSchema)

export default Logs