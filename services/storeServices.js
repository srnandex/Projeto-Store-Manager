const storeModel = require('../models/storeModel');

const getAll = async () => { 
  const result = await storeModel.getAll();
  if (!result) return [];
  return result;
};

const findById = async (id) => {
  const result = await storeModel.findById(id);
  if (!result) return [];
  return result;
};

module.exports = {
  getAll,
  findById,
};