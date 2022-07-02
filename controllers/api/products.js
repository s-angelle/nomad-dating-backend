const Product = require('../../models/Product');

// Find all products
const index = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (e){
        res.status(400).json({msg: e.message})
    }

};

// Create a product
const create =  async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body)
        res.status(200).json(createdProduct)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Update a product

const update =  async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedProduct)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Delete a product

const remove =  async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedProduct)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

module.exports = {
    index,
    create,
    update,
    remove
}