const handleProfile = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({
        id: id
    })
        .then(user => {
            //if user doesn't exist
            if (user.length) {
                res.json(user[0])
            }
            else {
                res.status(400).json('Not Found User')
            }
        })

}

module.exports = {
    handleProfile: handleProfile
}