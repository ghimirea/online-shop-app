module.exports = function allow(role) {
    return (req, res, next) => {
        if (req.session.user.role === role) {
            next()
        } else {
            res.status(403).send("Access Denied, Only accessible by Administrators!!!!Click the Back button and go back!!!!")
            //res.redirect('/');
        }

    }

}