const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        Unique:true
    },
    password:{
        type:String
    },
    gender:{
        type:String,
        enum:['Male' , 'Female']
    },
    age:{
        type:Number
    },
    isDelete:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('users' , userSchema);