import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(
    '<h1>Throw Out Error</h1><p>This website is work in progress.</p>'
  )
})

router.get("/projects", async (req, res) => {
    // Fetch github projects from my dev team
    var githubProjects = await (await fetch("https://api.github.com/users/throw-out-error/repos")).json();
    res.render('projects/index', {
      projectsWorkedOn: githubProjects.length,
    })
});

export const throwOutErrorRouter = router
