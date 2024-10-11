const { productServices } = require("../../services")
const { errorResponse, successResponse } = require("../../utils")

const productController = {
    createProduct: async(req, res)=>{
        try {
            const {name, quantity=12,minQuantity=10 , image} = req.body
            if(!name){
                return errorResponse(res, "Please provide product name!!")
            }
            const product = {
                name, quantity,minQuantity, image
            }
            const productCreated = await productServices.createProduct(product)
            return productCreated?successResponse(res,productCreated, "Product created Successfully!"): errorResponse(res, "Couldnt create product, Please try again!!")
        } catch (error) {
            console.error(error);
            return errorResponse(res, error.message || "Couldnt create product, Please try again!!")
        }
    }
}

module.exports = productController