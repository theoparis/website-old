import { isLoggedIn } from './config'

export default (req, res, next) => {
  if (!isLoggedIn(req))
    return res.status(400).json({ message: 'Not logged in' })

  next()
}
