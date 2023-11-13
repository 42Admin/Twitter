const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const router = Router()


router.get('/comments', commentsController.getComments)
router.post('/comments', commentsController.postComment)
router.delete('/comments', commentsController.deleteComment)
router.patch('comments', commentsController.patchComment)

module.exports = router;