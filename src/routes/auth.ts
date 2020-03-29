import express from 'express'
import monk from 'monk'
import bcrypt from 'bcrypt'
import url from 'url'

import { users, permissionLevels, saltRounds } from '../config'
import { getGoogleAccountFromCode } from '../google-util'

const router = express.Router()

router.get('/google', async (req, res) => {
  const code = decodeURIComponent(req.query.code)
  console.log(code)
  if (code) {
    const google = await getGoogleAccountFromCode(code)
    if (google && google.email) {
      var existing = await users.findOne({ email: google.email })
      if (existing) {
        if (existing.provider != 'google') {
          existing.provider = 'google'
        }
        existing.picture = google.picture
        existing.name = google.name
        await existing.save()
        req.session.user = existing
        req.session.google = google
        req.session.save(() => {
          res.redirect('/dashboard')
        })
      } else {
        const user = await users.insert({
          email: google.email,
          provider: 'google',
          picture: google.picture,

        })
        if (user) {
          req.session.user = user
          req.session.save(() => {
            res.redirect('/dashboard')
          })
        } else {
          req.session.user = null;
          req.session.save(() => {
            res.redirect('/dashboard')
          })
        }
      }
    }
  } else {
    res.redirect('/')
  }
})

// registration
router.post('/user/create', async (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    let existing = await users.findOne({ username: req.body.username })
    if (existing) {
      res.redirect(
        url.format({
          pathname: '/dashboard/register',
          query: {
            error: 'A user with this username already exists.',
          },
        })
      )
      return
    }

    users
      .insert({
        name: req.body.name,
        username: req.body.username,
        password: hash,
        provider: 'none',
        roles: [permissionLevels.user],
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
