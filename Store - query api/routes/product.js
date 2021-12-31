const express = require('express')
const router = express.Router()

const {getAllProduct, createProduct} = require('../controller/product-logic')

router.get('/',getAllProduct)
router.post('/',createProduct)


module.exports = router