const { productModel } = require('../models');

const productServices = {
  createProduct: async (productData) => {
    try {
      
      const createdProduct = await productModel.create(productData);
      return createdProduct;
    } catch (error) {
      throw new Error(`Failed to create product: ${error.message}`);
    }
  },
}

module.exports = productServices