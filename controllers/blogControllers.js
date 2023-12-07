const Blog=require('../models/blog')
const blog_index=(req,res)=>{
    Blog.find()
    .then(result=>{
        res.render('index',{title:'home',blogs:result})
    })
    .catch(err=>{
        console.log(err)
    });

}
const blog_create=(req,res)=>{
    res.render('create',{title:'new blog'})
}
const blog_details=(req,res)=>{
    const id=req.params.id
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{title:'details',blog:result})

    })
    .catch((err)=>{
        console.log(err)
        
    });
}
const blog_post=(req,res)=>{
    const blog=new Blog(req.body)
    blog.save()
    .then((result)=>{
      res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
        
    })
}
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  }
module.exports={
    blog_index,
    blog_create,
    blog_details,
    blog_post,
    blog_delete
}