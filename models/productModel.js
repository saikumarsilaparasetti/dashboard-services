const { mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide product name"]
    },
    image:{
        type:String,
        default:""
    },
    quantity:{
        type:Number,
        default:0
    },
    minQuantity:{
        type:Number,
        default:0
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})

const productModel = mongoose.model("Product", productSchema)
module.exports = productModel