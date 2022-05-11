const express = require('express');
const router = express.Router();

const handleErrorAsync = require('../utils/handleErrorAsync');
const PostController = require('../controllers/posts');
const { isAuth } = require('../utils/auth');
router
  .get('/', isAuth, handleErrorAsync(PostController.getPosts))
  .post('/', isAuth, handleErrorAsync(PostController.postPost))
  .delete('/', isAuth, handleErrorAsync(PostController.deletePosts))
  .delete('/:id', isAuth, handleErrorAsync(PostController.deletePost))
  .patch('/:id', isAuth, handleErrorAsync(PostController.updatePost));

  module.exports = router;
