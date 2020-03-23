import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(
    '<h1>Throw Out Error</h1><p>This website is work in progress.</p>'
  )
})

export const throwOutErrorRouter = router
