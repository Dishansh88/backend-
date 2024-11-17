require("dotenv").config()
const mongoose=require("mongoose")
const express=require("express")
const PORT=process.env.PORT|| 7001
const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const uerschema=new mongoose.Schema(
    
    {
        Name:{
            type:String,
            required:true,
            unique:true
          
        },
        Lastname:
        {
            type:String,
          
        }
    }
       

)
const User=mongoose.model("user",uerschema)
module.exports=User
mongoose.connect(process.env.MONGODB_URL|| process.env.MONGODB_URL_LOCAL ).then(()=>console.log("mongoose connected"))
app.get('/',(req,res)=>
{
     res.send('hello')
})
app.post('/user',async(req,res)=>
{
      console.log(req.body)
      let response=await User.create({...req.body})
      res.send('sucess')
})
app.listen(PORT,()=>console.log("server started"))