import express from 'express'
import monk from 'monk'
import bcrypt from 'bcrypt'

import { users, permissionLevels, saltRounds } from '../config'

const router = express.Router()

// registration
router.post('/user/create', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    users
      .insert({
        name: req.body.name,
        username: req.body.username,
        password: hash,
        roles: [
            permissionLevels.user
        ],
      })
      .then(data => {
        if (data) {
          req.session.user = data
          req.session.save(() => {
            res.redirect('/dashboard')
          })
        } else {
          req.session.user = null
          req.session.save(() => {
            res.redirect('/dashboard/register')
          })
        }
      })
  })
})

router.get('/logout', (req, res) => {
  if (req.session.user) {
    req.session.user = null
    // Save the user's session so that they are logged out
    req.session.save(() => res.redirect('/dashboard/login'))
  } else {
    // User is not logged in
    res.redirect('/dashboard/login')
  }
})

router.post('/user', (req, res) => {
  users.findOne({ username: req.body.username }).then(function(user) {
    if (!user) {
      req.session.user = null
      req.session.save(() => {
        res.redirect('/')
      })
    } else {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
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
