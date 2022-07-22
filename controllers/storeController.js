const storeServices = require('../services/storeServices');

const getAll = async (_req, res) => {
  const result = await storeServices.getAll();
  if (result.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await storeServices.findById(id);
  if (result.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(result);
};

const registerNewProduct = async (req, res) => {
  const { name } = req.body;
  const result = await storeServices.registerNewProduct(name);
  // if (result.length === 0) {
  //   return res.status(404).json({ message: 'Product not found' });
  // }
  res.status(201).json(result);
};

module.exports = {
  getAll,
  findById,
  registerNewProduct,
};