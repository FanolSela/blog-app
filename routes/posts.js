const { Router } = require('express')
const requests = require('../requests/posts')

const router = Router()

router.get('/posts', requests.getPosts)
router.get('/posts/:id', requests.getPost)
router.post('/posts', requests.createPost)
router.put('/posts/:id', requests.updatePost)
router.delete('/posts/:id', requests.deletePost)

module.exports = router