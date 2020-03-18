import express from 'express'
import monk from 'monk'
import bcrypt from 'bcrypt'

const saltRounds = 10
// TODO: move to separate config file
const dbUrl = 'localhost:27017/website'

const db = monk(dbUrl)
const users = db.get('users')

const router = express.Router()

// registration
router.post('/user/create', function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        users
            .insert({
                name: req.body.name,
                username: req.body.username,
                password: hash,
            })
            .then(function(data) {
                if (data) {
                    req.session.user = data
                    req.session.save(() => {
                        res.redirect('/dashboard')
                        console.log(req.session);
                    })
                }
            })
    })
})

router.post('/user', function(req, res) {
    users.findOne({ username: req.body.username }).then(function(user) {
        if (!user) {
            req.session.user = null
            req.session.save(() => {
                res.redirect('/')
            })
        } else {
            bcrypt.compare(req.body.password, user.password, function(
                err,
                result
            ) {
                if (result == true) {
                    req.session.user = user
                    req.session.save(() => res.redirect('/dashboard'))
                } else {
                    req.session.user = null
                    req.session.save(() => {
                        res.redirect('/')
                    })
                }
            })
        }
    })
})

export const authRouter = router
