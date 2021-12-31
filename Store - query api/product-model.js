const mongoose = require('mongoose')
const Product = mongoose.model('product',{
    name:{type:String},
    price:{type:Number},
    featured:{type:Boolean},
    company:{type:String},
})

module.exports = Product