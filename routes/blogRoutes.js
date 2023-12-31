const express=require('express')
const router=express.Router()
const blogController=require('../controllers/blogControllers')

router.get('/',( blogController.blog_index))
router.get('/create',(blogController.blog_create))
 router.get('/:id',( blogController.blog_details))
 router.delete('/:id',( blogController.blog_delete))
 router.post('/',( blogController.blog_post))
   
    
 
 module.exports=router


