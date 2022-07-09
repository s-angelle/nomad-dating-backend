const Order = require('../../models/Order');

// Find user orders
const getUserOrder = async (req, res) => {
    try {
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    } catch (e){
        res.status(400).json({msg: e.message})
    }

};

// Create an order
const create =  async (req, res) => {
    try {
        const createdOrder = await Order.create(req.body)
        res.status(200).json(createdOrder)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Update an order

const update =  async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedOrder)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Delete an order

const remove =  async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedOrder)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

module.exports = {
    getUserOrder,
    create,
    update,
    remove
}