// import dependencies
// Here we use the import statement for typescript
import express from 'express'
import monk from 'monk'
import flash from 'express-flash'
import session from 'express-session'
import cors from 'cors'
import swig from 'swig'
import fs from 'fs'
import vhost from 'vhost-ts'
import https from 'https'
import cookieSession from 'cookie-session'

import { posts } from './config'
import { authRouter } from './routes/auth'
import { blogRouter } from './routes/blog/blog'

import path from 'path'
import { throwOutErrorRouter } from './routes/throw-out-error'
const app = express()
const result = require('dotenv').config()
if (result.error) {
  throw result.error
}
const env = result.parsed
/* If we don't use this, accessing the api from the frontend
will give us a cross origin (cors) error because they are on different ports.
Also has to be first in order for it to work.
*/
app.use(cors())

app.use(
  session({
    secret: '12 34',
    resave: true,
    saveUninitialized: true,
    cookie: {
      domain: '.creepinson.xyz',
      // maxAge: 86400000, // one day
      httpOnly: false,
      path: '/',
    },
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())

app.use('/api/auth', authRouter)

// Subdomains
app.use(vhost('throw-out-error.dev', throwOutErrorRouter))
// ----------
app.use('/toe', throwOutErrorRouter)
app.use('/blog', blogRouter)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'public'))

app.use('*', (req, res, next) => {
  var file = path.join(__dirname, '..', 'public', req.originalUrl)
  if (file != null && file != '') {
    if (
      req.originalUrl.startsWith('/css') ||
      req.originalUrl.startsWith('/js') ||
      req.originalUrl.startsWith('/assets') ||
      req.originalUrl.startsWith('/favicon')
    ) {
      res.sendFile(file)
    } else {
      res.render(file, { session: req.session }, (err, html) => {
        if (err) {
          if (err.message.startsWith('Failed to lookup view'))
            error404(req, res, html)
        } else {
          res.send(html)
        }
      })
    }
  } else {
    next()
  }
})

// Error handling
const error404 = (req, res, html) => {
  res.status(404).send('<h1>404</h1><h2>Requested Resource Not Found</h2>')
}

if (process.env.NODE_ENV === 'production') {
  // we will pass our 'app' to 'https' server
  https
    .createServer(
      {
        key: fs.readFileSync(env.key),
        cert: fs.readFileSync(env.cert),
      },
      app
    )
    .listen(env.sslPort || 8443)
  app.listen(env.port || 3000, () => {
    console.log('Express server listening on 0.0.0.0:3000')
  })
} else {
  app.listen(process.env.port || 3000, () => {
    console.log('Express server listening on 0.0.0.0:3000')
  })
}
