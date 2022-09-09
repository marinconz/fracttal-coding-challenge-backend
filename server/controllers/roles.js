import mongoose from 'mongoose'
import RoleDescription from '../models/roleDescription.js'
import {logger} from '../index.js'

export const getRoles = async (req, res) => {
    try {

        const roles = await RoleDescription.find()
        res.status(200).json(roles)

    } catch (error) {

        res.status(404).json({ message: error.message })
    }
}

export const createRole = async (req, res) => {
    const role = req.body
    const newRole = new RoleDescription(role)
    try {
        
        await newRole.save()
        logger.log({
            level: 'info',
            message: `User CREATED from ${req.socket.remoteAddress} at ${new Date().toISOString().replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, '$1')}`,
        })
        res.status(201).json(newRole)

    } catch (error) {

        res.status(409).json({ message: error.message })
    }
}

export const updateRole = async (req, res) => {
    const { id: _id } = req.params
    const role = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No role with that Id')

    const updatedRole = await RoleDescription.findByIdAndUpdate(_id, {...role, _id}, {new: true})
    logger.log({
        level: 'info',
        message: `User UPDATED from ${req.socket.remoteAddress} at ${new Date().toISOString().replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, '$1')}`,
    })
    res.json(updatedRole)
}

export const deleteRole = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No role with that Id')

    await RoleDescription.findByIdAndRemove(id)
    logger.log({
        level: 'info',
        message: `User DELETED from ${req.socket.remoteAddress} at ${new Date().toISOString().replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, '$1')}`,
    })
    res.json({message: 'Post deleted successfully'})
}