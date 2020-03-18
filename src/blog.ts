import express from 'express'
import monk from 'monk'

// TODO: move to separate config file
const dbUrl = 'localhost:27017/website'

const db = monk(dbUrl)
const posts = db.get('posts')

const router = express.Router()

router.get('/posts', async (req, res) => {
    res.json(await posts.find());
})

router.delete("/admin/deletePost", async (req, res) => {
    const result = await posts.remove(req.body);
    res.json(result);
});

// TODO: add authentication
router.post('/admin/createPost', async (req, res) => {
    if (isValidPost(req.body)) {
        posts.insert(req.body).then(err => {
            if (err) console.error(err)
            res.status(201).json({ message: 'Post added' })
        })
    } else {
        res.status(400).json({ message: 'Invalid post details' })
    }
})

const isValidPost = json => {
    // Verifying that the post info is entered properly
    return json.title && json.title != '' && json.content && json.content != ''
}

export const blogRouter = router
