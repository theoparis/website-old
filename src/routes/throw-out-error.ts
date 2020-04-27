import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>Throw Out Error</h1><p>This website is work in progress.</p>')
})

router.get('/projects', async (req, res) => {
    // Fetch github projects from my dev team
    var githubProjects = await (
        await fetch('https://api.github.com/users/throw-out-error/repos')
    ).json()
    res.render('projects/index', {
        projectsWorkedOn: githubProjects.length,
    })
})

router.get('/git', (req, res) =>
    res.redirect('https://github.com/throw-out-error')
)

export const throwOutErrorRouter = router
