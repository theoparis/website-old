// import dependencies
// Here we use the import statement for typescript
import express from 'express'
import monk from 'monk'
import flash from 'express-flash'
import session from 'express-session'
import cors from 'cors'
import swig from 'swig'
import fs from 'fs'
import vhost from "vhost-ts";

import { posts } from './config'
import { authRouter } from './routes/auth'
import { blogRouter } from './routes/blog/blog'

import path from 'path'
import { throwOutErrorRouter } from './routes/throw-out-error'
const app = express()
/* If we don't use this, accessing the api from the frontend
will give us a cross origin (cors) error because they are on different ports.
Also has to be first in order for it to work.
*/
app.use(cors())
app.use(
  session({
    cookie: {
      // Sets the cookie to secure if the environemnt is production
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
    resave: true,
    saveUninitialized: true,
    secret: '1234', // why not
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())

// Subdomains
app.use(
  vhost('blog.creepinson.xyz', (req, res, next) => {
    req.url = req.url + req.vhost[0]
    next()
  })
)
app.use(
  vhost('throw-out-error.dev', throwOutErrorRouter)
)
// ----------

app.use('/blog', blogRouter)

app.use('/api/auth', authRouter)

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

/* 
The env variable here can be used in hosting companies like heroku
in order to assign the port from the CLI automatically. If we do not specify this variable,
heroku or some other hosting providers will assign a random port that is not being used by this app,
therefore it will not serve the website.
*/
app.listen(process.env.port || 3000, () => {
  console.log('Express server listening on 0.0.0.0:3000')
})
