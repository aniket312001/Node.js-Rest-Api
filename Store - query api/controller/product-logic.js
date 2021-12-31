const { takeLast } = require('rxjs')
const Product = require('../product-model')





const getAllProduct = async (req,res)=>{

    const {featured, company, name , sort, fields, numericFilter} = req.query
    const queryObject = {}


    // console.log(typeof(featured))  // true  // it will return string 

    if(featured){
        queryObject.featured = featured==='true'?true:false
    }

    if(company){
        queryObject.company = company
    }

    // if(name){
    //     queryObject.name = name
    // }

    if(name){
        queryObject.name = {$regex:name,$options:'i'}
    }

    let result = Product.find(queryObject)

    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }


    if(fields){  // name , price
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }

 // limit
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit 
    result  = result.skip(skip).limit(limit)

// numeric feature price>400
    if(numericFilter){
        const operatorMap = {
            '>' :'$gt',
            '>=' :'$gte',
            '=' :'$eq',
            '<' :'$lt',
            '>=' :'$lte',
           
        }

        const regEx = `/\b(<|>|>=|=|<|<=)\b/g`
        let filters = numericFilter.replace(regEx,(match)=>{
            `-${operatorMap[match]}-`
        })
        console.log(filters)

        const options = ['price']
        filters = filters.split(',').forEach((item) => {
            const [field,operator,value] = item.split('-')

            if(options.includes(fields)){
                queryObject[fields] = {[operator]:Number(value)}
            }
        }); 


    }

    console.log(queryObject)

    // const products = await Product.find(queryObject)
    const products = await result
    res.status(200).json({products,length:products.length})
}








const createProduct = (req,res)=>{
    let data = new Product({
        name :req.body.name,
        price:req.body.price,
        featured:req.body.featured,
        company:req.body.company,
    })

    data.save((err,doc)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(doc)
        }
    })
}


module.exports = {
    getAllProduct,
    createProduct,
}