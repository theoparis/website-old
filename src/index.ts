// import dependencies
// Here we use the import statement for typescript
import express from 'express'
import fetch from 'node-fetch'
import monk from 'monk'
import flash from 'express-flash'
import session from 'express-session'
import cors from 'cors'
import swig from 'swig'
import fs from 'fs'
import vhost from 'vhost-ts'
import https from 'https'
import cookieSession from 'cookie-session'
import ytdl from 'ytdl-core'
import { downloadOptions, videoFormat } from 'ytdl-core'

import { projects, env } from './config'
import { authRouter } from './routes/auth'
import { blogRouter } from './routes/blog/blog'

import path from 'path'
import { throwOutErrorRouter } from './routes/throw-out-error'
import { storeRouter } from './routes/store'
import { urlGoogle } from './google-util'
const app = express()

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

app.use('/store', storeRouter)

app.get('/convert/ytmp3', (req, res) => {
  const url = req.query.url
  res.header('Content-Disposition', 'attachment; filename="audio.mp3"')
  ytdl(url, {
    filter: 'audioonly',
  }).pipe(res)
})

app.get('/convert/ytmp4', (req, res) => {
  const url = req.query.url
  res.header('Content-Disposition', 'attachment; filename="video.mp4"')
  ytdl(url, {}).pipe(res)
})

app.use('/toe', throwOutErrorRouter)
app.use('/blog', blogRouter)
app.get('/projects', async (req, res) => {
  // Fetch github projects from my dev team
  var githubProjects = await (
    await fetch('http://api.github.com/users/throw-out-error/repos?sort=pushed')
  ).json()
  res.render('projects/index', {
    projectsWorkedOn: (await projects.find({})).length + githubProjects.length,
    projects: await projects.find({}),
    githubProjects,
  })
})

app.get("/dashboard/google", (req, res) => {
  res.render("dashboard/google", { googleUrl: urlGoogle() });
})

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
      if (req.query.error && req.query.error != null) {
        res.render(
          file,
          { session: req.session, error: req.query.error },
          (err, html) => {
            if (err) {
              if (err.message.startsWith('Failed to lookup view'))
                error404(req, res, html)
            } else {
              res.send(html)
            }
          }
        )
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
    }
  } else {
    next()
  }
})

// Error handling
const error404 = (req, res, html) => {
  res.status(404).send('<h1>404</h1><h2>Requested Resource Not Found</h2>')
}

app.listen(process.env.port || 3000, () => {
  console.log('Express server listening on 0.0.0.0:3000')
})
