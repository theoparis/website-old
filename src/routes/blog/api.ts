import express from 'express'
import monk from 'monk'

import { posts, hasRole, permissionLevels, isAuth } from '../../config'

const router = express.Router()

router.get('/posts', async (req, res) => {
  res.json(await posts.find())
})

router.delete('/admin/deletePost', async (req, res) => {
  const result = await posts.remove(req.body)
  res.json(result)
})

router.post('/admin/createPost', isAuth, async (req, res) => {
  if (await hasRole(req, permissionLevels.writer))
    return res.status(400).json({
      message:
        'You do not have permission to perform this action.',
    })
  if (isValidPost(req.body)) {
    req.body.createdAt = new Date()
    req.body.author = req.session.user.name
    posts.insert(req.body).then(result => {
      console.log(result)
      res.status(201).json({ message: 'Post added' })
    })
  } else {
    res.status(400).json({ message: 'Invalid post details' })
  }
})

export const isValidPost = json => {
  // Verifying that the post info is entered properly
  return json.title && json.title != '' && json.content && json.content != '' && json.description && json.description != ''
}

export const apiRouter = router
