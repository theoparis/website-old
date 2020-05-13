import express from 'express'
import monk from 'monk'

import { posts, isLoggedIn, hasRole, permissionLevels } from '../../config'
import { apiRouter, isValidPost } from './api'
const router = express.Router()

router.use('/api', apiRouter)

router.use('/post/:title', async (req, res) => {
  res.render('blog/individual', {
    post: await posts.findOne({ title: req.params.title }),
  })
})

router.use('/list', async (req, res) => {
  res.render('blog/blog', {
    posts: await posts.find({}, { sort: { createdAt: -1 } }),
  })
})

router.use('/', async (req, res) => {
  res.redirect('/blog/list')
})

export const blogRouter = router
