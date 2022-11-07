const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

//create api route to post add new blog
// post request to handle comment submission
router.post('/comments', withAuth, async(req,res) =>{
    const commentData = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    })
    res.json(commentData);
  })

module.exports = router;