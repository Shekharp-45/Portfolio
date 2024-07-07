const express=require('express');
const mongoose=require('mongoose')
const path=require('path')

const port=3019

const app=express();
//with this middleware func will get submited data in req.body obj
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))//from thiscss with get added

//connect mongodb with help of mongoose
mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
const db=mongoose.connection
db.once('open',()=>{
    console.log("Mongodb Connected Successfully!!")
})

//define schema i.e structre of db
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
});
const Users=mongoose.model("Users",userSchema)


//Content of index.html came on your port without css. 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/post', async(req, res) => {
    //console.log(req.body);//--> cheak Log the receiving data??
    const { name, email, message } = req.body;
    const user = new Users({ name, email, message });
    await user.save();
    try {
        res.status(200).json({ message: 'Successfully Submitted!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
        
});
//get to know server is running on server 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    
});


