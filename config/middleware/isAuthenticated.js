const auth = {
    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()) {
            console.log("User authenticated")
            next()
        } else {
            console.log("User not authenticated")
            res.redirect('api/users/unauthorized')
        }
    },

    logoutUser: (req, res, next) => {
        if(req.isAuthenticated()) {
            console.log("Logged out successfully")
            req.logout()
            next()
        } else {
            next()
        }
    }

}

module.exports = auth