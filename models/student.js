const mongoose=require (`mongoose`);
 

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }, email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    img:{
        type:String,

    },
    birth:{
        type:Date,
    }

});   
const Student=mongoose.model("Student",studentSchema);

module.exports=Student;