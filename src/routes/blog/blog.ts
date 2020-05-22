import express from 'express'

import { Post, isLoggedIn, hasRole, permissionLevels } from '../../config'
import { apiRouter, isValidPost } from './api'
const router = express.Router()

router.use('/api', apiRouter)

router.use('/indiv/:title', async (req, res) => {
  res.render('blog/individual', {
    post: await Post.findOne({ title: req.params.title }),
  })
})

router.use('/posts', async (req, res) => {
  res.render('blog/blog', {
    posts: await Post.find({}, { sort: { createdAt: -1 } }),
  })
})

router.use('/', async (req, res) => {
  res.redirect('/blog/posts')
})

export const blogRouter = router
