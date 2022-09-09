/* eslint-disable no-undef */
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import winston from 'winston'
import 'winston-mongodb'

import roleRoutes from './routes/roles.js'
import userRoutes from './routes/users.js'
import logsRoutes from './routes/logs.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.enable('trust proxy')


export const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.MongoDB({
            db: process.env.CONNECTION_URL,
            options: { useUnifiedTopology: true },
            collection: 'logs'
        })
    ],
})

app.use('/roles', roleRoutes)
app.use('/user', userRoutes)
app.use('/logs', logsRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message))

