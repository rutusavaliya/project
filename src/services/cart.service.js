const Cart = require('../model/cart.model');

module.exports = class CartServieces {

    //Add new Cart


    async addNewCart(body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get single Cart

    async getCart(body) {
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get single CartById
    
    async getCartById(id) {
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    //update Cart

    async updateCart(id, body) {
        try {
            return await Cart.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

     // Get All Cart

     async getAllCarts(query) {
        try {
            let find = [
                { $match: { isDelete: false } },

            ];

            let result = await Cart.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }


}