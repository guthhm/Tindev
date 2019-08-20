const dev = require('../model/dev')

module.exports = {
    async store(req, res) {
        //console.log(req.params.devID)
        //console.log(req.headers.user)

        const {devID} = req.params
        const {user} = req.headers

        const loggedDev = await dev.findById(user)
        const targetDev = await dev.findById(devID)

        if (!targetDev) {
            return res.status(400).json({error: 'Dev not exists'})
        }

        loggedDev.dislikes.push(targetDev._id)

        await loggedDev.save()

        return res.json(loggedDev)
    }
}