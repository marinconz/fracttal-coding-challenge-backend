import Logs from '../models/logs.js'

export const getLogs = async (req, res) => {
    try {
        const logs = await Logs.find()
        res.status(200).json(logs)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
