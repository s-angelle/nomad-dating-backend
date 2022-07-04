const Cart = require('../../models/Cart');

// Find user cart
const getUserCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)
    } catch (e){
        res.status(400).json({msg: e.message})
    }

};

// Create a cart
const create =  async (req, res) => {
    try {
        const createdProduct = await Cart.create(req.body)
        res.status(200).json(createdProduct)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Update a cart

const update =  async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedCart)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Delete a cart

const remove =  async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedCart)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

module.exports = {
    getUserCart,
    create,
    update,
    remove
}