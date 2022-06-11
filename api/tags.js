const express = require('express');
const tagRouter = express.Router();
const {getPostsByTagName, getAllTags} = require('../db');


tagRouter.use((req, res, next) => {
    console.log("A request is being made to /tags");
  
    next(); 
  });
  
  tagRouter.get('/', async (req, res) => {
    const tags = await getAllTags();
  
    res.send({
      tags
    });
  });

  tagRouter.get('/:tagName/posts',async(req,res,next) => {
    const {tagName} = req.params;
    try {
        const postsByTagName = await getPostsByTagName(tagName);
        const posts = postsByTagName.filter(post => {
            // keep a post if it is either active, or if it belongs to the current user
            return post.author.active || post.active || (req.user && post.author.id === req.user.id);
          });
    res.send({
        posts
    });
} catch ({name,message}) {
    next({ name, message });
    }
})

module.exports = tagRouter;