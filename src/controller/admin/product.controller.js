const ProductServieces = require('../../services/product.service');
const productService = new ProductServieces();

exports.addNewProduct = async(req , res) => {
    try {
        let product = await productService.getProduct({title: req.body.title , isDelete: false});
        if(product){
            return res.status(400).json({Message: 'Product is alredy exist'});
        }
        product = await productService.addNewProduct({...req.body});
        res.status(201).json({product , Message: 'product is Added...'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};

exports.getAllProducts = async(req , res) => {
    try {
        let products = await productService.getAllProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};


exports.getProduct = async(req , res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({Message: 'product is not found'});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};

exports.updateProduct = async(req , res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({Message: 'product is not found'});
        }
        product = await productService.updateProduct(product._id , {...req.body});
        res.status(202).json({product , Message: 'Product is Updated'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};

exports.deleteProduct = async(req , res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({Message: 'product is not found'});
        }
        product = await productService.updateProduct(product._id , {isDelete: true});
        res.status(202).json({product , Message: 'Product is Deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
}