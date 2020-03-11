// import dependencies
// Here we use the import statement for typescript
import express from 'express'
import monk from 'monk'
import cors from 'cors'
import { blogRouter } from './blog'
const app = express()
/* If we don't use this, accessing the api from the frontend
will give us a cross origin (cors) error because they are on different ports.
Also has to be first in order for it to work.
*/
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is an API Backend!')
})
app.use('/blog', blogRouter)

app.get('/test', (req, res) => res.send('It works!'))

app.listen(3000, () => {
    console.log('Express backend listening on 0.0.0.0:3000')
})
