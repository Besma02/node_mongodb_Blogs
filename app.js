const express=require('express')
const app=express()
app.set('view engine','ejs')
app.use(express.static('public'))
const mongoose=require('mongoose')
const Blog=require('./models/blog')
app.use(express.urlencoded({extended:true}))
const blogRoutes=require('./routes/blogRoutes')
const dbURL=('mongodb+srv://besmaharzli:test1234@cluster0.olet8ci.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(dbURL)
.then(result=>{
    app.listen(3000)

})
.catch(err=>{
    console.log(err)
})
app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'new blog2',
        snippet:'about my blog',
        body:'more about my blog'
    })
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})
app.get('/all-blogs',(req,res)=>{
   
   Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})
app.get('/single-blog',(req,res)=>{
   
    Blog.findById('657046eded80c8bb51856d88')
     .then((result)=>{
         res.send(result)
     })
     .catch(err=>{
         console.log(err)
     })
 })

app.get('/',(req,res)=>{
   res.redirect('/blogs')
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'})
})
// blogRoutes
app.use('/blogs',blogRoutes)

app.use((req,res)=>{
    res.render('404',{title:'404'})
})